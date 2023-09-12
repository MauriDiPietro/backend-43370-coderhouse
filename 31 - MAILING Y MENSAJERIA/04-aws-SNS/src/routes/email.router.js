import { Router } from "express";
import { publishTopic, sendSNS } from "../controllers/email.controller.js";

const router = Router();

router.post('/subscribe', sendSNS);
router.post('/publish', publishTopic);

export default router;

