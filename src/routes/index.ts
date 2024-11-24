// cspell: disable
import { Router } from "express";
import notificationRouter from "./notification";
const router = Router();

router.use("/", notificationRouter);

export default router;
