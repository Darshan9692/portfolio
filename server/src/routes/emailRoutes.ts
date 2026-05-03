import express, { Router } from "express";
import emailController from "../controllers/emailController.js";

const router: Router = express.Router();

router.post("/contact", emailController.sendContactEmail);

export default router;
