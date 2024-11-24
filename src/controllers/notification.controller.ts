// cspell: disable
import { Request, Response } from "express";
import { sendNotification } from "../utils/sns";

class NotificationController {
	sendNotification(req: Request, res: Response) {
		sendNotification(process.env.SNS_TOPIC_ARN, req.body.message)
			.then(() => {
				res.json({ message: "Notificación enviada" });
			})
			.catch((error) => {
				console.error("Error al enviar la notificación: ", error);
				res.status(500).send("Error al enviar la notificación");
			});
	}
}

export default new NotificationController();
