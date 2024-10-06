const express = require("express");
const router = express.Router();
const FormWidget = require("../models/FormWidget");

// POST route to save form widget settings
router.post("/", async (req, res) => {
  const {
    title,
    subtitle,
    fontSize,
    submitButtonText,
    buttonColor,
    firstNameRequired,
    lastNameRequired,
  } = req.body;

  try {
    // Create a new form widget using Mongoose
    const formWidget = new FormWidget({
      title,
      subtitle,
      fontSize,
      submitButtonText,
      buttonColor,
      firstNameRequired,
      lastNameRequired,
    });

    // Save the form widget to MongoDB
    const savedWidget = await formWidget.save();
    res.status(201).json(savedWidget); // Return the newly created widget
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
