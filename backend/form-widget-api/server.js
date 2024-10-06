const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // Import CORS
require("dotenv").config(); // Load environment variables

const app = express();
const port = process.env.PORT || 3000;

app.use(
  cors({
    origin: [
      "http://localhost:4200", // Allow requests from local Angular app during development
      "https://y-akglrmz5s-eirinis-projects.vercel.app/", // Allow requests from your deployed Angular app
    ],
    optionsSuccessStatus: 200, // Some legacy browsers choke on 204
  })
);

// Middleware to parse incoming JSON requests (replace bodyParser)
app.use(express.json()); // <-- Use express.json() to parse JSON payloads

// Connect to MongoDB using Mongoose
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Basic route to confirm the API is running
app.get("/", (req, res) => {
  res.send("Form Widget API is running");
});

// Import the form widget routes
const formWidgetRoutes = require("./routes/formWidget");

// Use the form widget routes for the '/api/form-widget' path
app.use("/api/form-widget", formWidgetRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
