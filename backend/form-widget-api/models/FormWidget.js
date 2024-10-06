const mongoose = require("mongoose");

const FormWidgetSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    subtitle: { type: String },
    fontSize: { type: String },
    submitButtonText: { type: String, required: true },
    buttonColor: { type: String, required: true },
    firstNameRequired: { type: Boolean, required: true },
    lastNameRequired: { type: Boolean, required: true },
  },
  {
    timestamps: true, // Automatically creates 'createdAt' and 'updatedAt' fields
  }
);

module.exports = mongoose.model("FormWidget", FormWidgetSchema);
