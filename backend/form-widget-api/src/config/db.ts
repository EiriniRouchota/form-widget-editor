import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

// Define the connection to PostgreSQL using Sequelize
const sequelize = new Sequelize(
  process.env.DB_NAME as string, // Database name
  process.env.DB_USER as string, // Database username
  process.env.DB_PASSWORD as string, // Database password
  {
    host: process.env.DB_HOST as string, // Database host
    dialect: "postgres", // Using PostgreSQL
    logging: false, // Disable SQL logging in the console
  }
);

export default sequelize;
