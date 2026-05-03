import { Request, Response, NextFunction } from "express";
import emailService from "../services/emailService.js";

class EmailController {
  public async sendContactEmail(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const { name, email, subject, message } = req.body;

      if (!name || !email || !subject || !message) {
        return res.status(400).json({
          success: false,
          message: "Please provide all required fields: name, email, subject, and message.",
        });
      }

      await emailService.sendContactEmail({ name, email, subject, message });

      return res.status(200).json({
        success: true,
        message: "Email sent successfully!",
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new EmailController();
