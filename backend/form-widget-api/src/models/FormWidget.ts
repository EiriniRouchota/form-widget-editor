import { Schema, model, Document } from "mongoose";

// Define an interface for the FormWidget document
interface IFormWidget extends Document {
  title: string;
  subtitle?: string;
  fontSize?: string;
  submitButtonText: string;
  buttonColor: string;
  firstNameRequired: boolean;
  lastNameRequired: boolean;
  createdAt?: Date; // Timestamps field
  updatedAt?: Date; // Timestamps field
}

// Define the schema using the interface
const FormWidgetSchema: Schema = new Schema(
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

// Export the model using the interface
export default model<IFormWidget>("FormWidget", FormWidgetSchema);
