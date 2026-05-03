import app from "./app.js";
import dotenv from "dotenv";

dotenv.config();

const PORT: string | number = process.env.PORT || 3000;

const startServer = (): void => {
  try {
    app.listen(PORT, () => {
      console.log(`
🚀 Server is running!
🏠 Local: http://localhost:${PORT}
Environment: ${process.env.NODE_ENV || "development"}
      `);
    });
  } catch (error) {
    console.error("Error starting server:", error);
    process.exit(1);
  }
};

startServer();
