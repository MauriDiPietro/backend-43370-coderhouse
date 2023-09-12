import { Router } from "express";
import { sendSMS } from "../controllers/sms.controller.js";

const router = Router();

router.post('/sms', sendSMS);

export default router;

