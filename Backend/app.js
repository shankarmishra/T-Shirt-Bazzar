// Import required modules
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import { Sequelize } from "sequelize";

// Import routes
import userRoutes from "./src/routes/userRoutes.js";

// Import error handler middleware
import errorHandler from "./src/middlewares/errorHandler.js";

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware setup
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// MySQL Database Connection
const sequelize = new Sequelize(
  process.env.DB_NAME || "ecommerce_db",
  process.env.DB_USER || "root",
  process.env.DB_PASSWORD || "",
  {
    host: process.env.DB_HOST || "localhost",
    dialect: "mysql",
    logging: false, // Disable logs
  }
);

// Connect to MySQL
const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ MySQL connected successfully");
  } catch (error) {
    console.error("❌ MySQL connection error:", error.message);
    process.exit(1);
  }
};

connectDB();

// Define routes
app.use("/api/users", userRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to the E-Commerce API with MySQL");
});

// Error handling middleware
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

// Export sequelize instance
export { sequelize };
