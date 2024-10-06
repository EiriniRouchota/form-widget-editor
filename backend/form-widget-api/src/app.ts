import express, { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import cors from "cors"; // Import CORS
import dotenv from "dotenv";
import formWidgetRoutes from "./routes/formWidget"; // Import your routes

dotenv.config(); // Load environment variables

const app = express();
const port = process.env.PORT || 3000;

// Set up CORS
app.use(
  cors({
    origin: [
      "http://localhost:4200", // Allow requests from local Angular app during development
      "https://y-akglrmz5s-eirinis-projects.vercel.app/", // Allow requests from your deployed Angular app
    ],
    optionsSuccessStatus: 200, // Some legacy browsers choke on 204
  })
);

// Middleware to parse incoming JSON requests
app.use(express.json()); // Use express.json() to parse JSON payloads

// Connect to MongoDB using Mongoose
mongoose
  .connect(process.env.MONGO_URI as string, {})
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err: Error) => {
    console.error("MongoDB connection error:", err.message);
  });

// Basic route to confirm the API is running
app.get("/", (req: Request, res: Response) => {
  res.send("Form Widget API is running");
});

// Use the form widget routes for the '/api/form-widget' path
app.use("/api/form-widget", formWidgetRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
