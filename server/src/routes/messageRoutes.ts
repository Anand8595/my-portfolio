import { Router } from "express";
import { sendMessage, getMessages } from "../controllers/messageController";

const router = Router();

router.post("/", sendMessage);
router.get("/", getMessages);

export default router;
