import { Router } from "express";
import { receiveWS, sendWS } from "../controllers/ws.controller.js";

const router = Router();

router.post('/whatsapp', sendWS);
router.post('/inbox', receiveWS);

export default router;

