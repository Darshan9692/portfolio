import nodemailer, { Transporter, SentMessageInfo } from "nodemailer";
import { mailConfig, recipientConfig } from "../config/mail.config.js";
import { getContactEmailTemplate } from "../templates/contactEmail.js";

interface ContactEmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

class EmailService {
  private transporter: Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport(mailConfig);
  }

  async sendContactEmail({ name, email, subject, message }: ContactEmailData): Promise<SentMessageInfo> {
    const mailOptions = {
      from: recipientConfig.from,
      to: recipientConfig.to,
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: getContactEmailTemplate(name, email, subject, message),
    };

    try {
      const info = await this.transporter.sendMail(mailOptions);
      return info;
    } catch (error) {
      console.error("Email Service Error:", error);
      throw new Error("Failed to send email", { cause: error });
    }
  }
}

export default new EmailService();
