import dotenv from "dotenv";

dotenv.config();

interface MailConfig {
  service: string | undefined;
  auth: {
    user: string | undefined;
    pass: string | undefined;
  };
}

interface RecipientConfig {
  to: string | undefined;
  from: string | undefined;
}

export const mailConfig: MailConfig = {
  service: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
};

export const recipientConfig: RecipientConfig = {
  to: process.env.EMAIL_USER,
  from: process.env.EMAIL_USER,
};
