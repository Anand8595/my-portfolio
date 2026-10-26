import { Request, Response } from "express";
import { Resend } from "resend";
import { Message } from "../models/Message";
import { getDBStatus } from "../config/db";

export interface SavedMessage {
  _id?: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: "unread" | "read" | "archived";
  createdAt: Date;
}

// In-memory messages store
const inMemoryMessages: SavedMessage[] = [];

// Escape user input before putting it in the HTML email
const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

// Sends a notification email using Resend HTTP API (No SMTP / No Timeout on Render)
const sendNotificationEmail = async (data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  const { RESEND_API_KEY, EMAIL_TO } = process.env;

  if (!RESEND_API_KEY) {
    console.warn("[Email] RESEND_API_KEY missing in .env. Skipping email.");
    return;
  }

  try {
    const resend = new Resend(RESEND_API_KEY);

    // Resend free tier: 'from' must be onboarding@resend.dev unless custom domain is verified
    const recipient = EMAIL_TO || "anandsahire8595@gmail.com";

    const response = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: recipient,
      replyTo: data.email,
      subject: `Portfolio: ${data.subject} (from ${data.name})`,
      text: `Name: ${data.name}\nEmail: ${data.email}\nSubject: ${data.subject}\n\n${data.message}`,
      html: `
        <h3>New message from your portfolio</h3>
        <p><b>Name:</b> ${escapeHtml(data.name)}</p>
        <p><b>Email:</b> ${escapeHtml(data.email)}</p>
        <p><b>Subject:</b> ${escapeHtml(data.subject)}</p>
        <p><b>Message:</b></p>
        <p>${escapeHtml(data.message).replace(/\n/g, "<br/>")}</p>
      `,
    });

    console.log("[Email] Notification sent via Resend:", response);
  } catch (err) {
    console.error("[Email] Failed to send notification via Resend:", err);
  }
};

export const sendMessage = async (req: Request, res: Response) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Please provide your name, email, and message.",
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address.",
      });
    }

    const dbStatus = getDBStatus();
    const payload = {
      name: String(name).trim(),
      email: String(email).trim().toLowerCase(),
      subject: String(subject || "Portfolio Contact Inquiry").trim(),
      message: String(message).trim(),
      status: "unread" as const,
      createdAt: new Date(),
    };

    let savedData: SavedMessage | null = null;

    if (dbStatus.connected) {
      try {
        const saved = await Message.create(payload);
        savedData = {
          ...payload,
          _id: saved._id.toString(),
        };
      } catch (dbErr) {
        console.warn("[Database] MongoDB save error, falling back to memory/email:", dbErr);
      }
    }

    if (!savedData) {
      const memoryItem: SavedMessage = {
        ...payload,
        _id: `msg-${Date.now()}`,
      };
      inMemoryMessages.unshift(memoryItem);
      savedData = memoryItem;
    }

    // बदल: 'await' काढले आहे आणि बॅकग्राउंड एरर हँडल केली आहे
    sendNotificationEmail(payload).catch((err) =>
      console.error("[Email] background error:", err)
    );

    return res.status(201).json({
      success: true,
      message: "Thank you! Your message has been sent successfully. Anand will get in touch with you shortly.",
      data: savedData,
    });
  } catch (error) {
    console.error("Error saving message:", error);
    return res.status(500).json({
      success: false,
      message: "Unable to send message. Please try again later.",
    });
  }
};

export const getMessages = async (_req: Request, res: Response) => {
  try {
    const dbStatus = getDBStatus();

    if (dbStatus.connected) {
      const messages = await Message.find().sort({ createdAt: -1 });
      return res.json({ success: true, count: messages.length, data: messages });
    }

    return res.json({
      success: true,
      source: "in-memory",
      count: inMemoryMessages.length,
      data: inMemoryMessages,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error fetching messages",
    });
  }
};