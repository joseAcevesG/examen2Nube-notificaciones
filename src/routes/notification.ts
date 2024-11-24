import { Router } from "express";
import ClientController from "../controllers/notification.controller";

const router = Router();

router.post("/", ClientController.sendNotification);

export default router;
