import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const sequelize = new Sequelize(
  process.env.DB_NAME, // Use DB_NAME from .env
  process.env.DB_USER, // Use DB_USER from .env
  process.env.DB_PASSWORD, // Use DB_PASSWORD from .env
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    port: process.env.DB_PORT || 3306, // Use DB_PORT, default to 3306
    logging: false, // Disable logging
  }
);

export default sequelize;
