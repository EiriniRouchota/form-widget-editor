import { Router, Request, Response } from "express";
import FormWidget from "../models/FormWidget";

const router = Router();

// Define the structure of the request body using an interface
interface IFormWidgetBody {
  title: string;
  subtitle?: string;
  fontSize?: string;
  submitButtonText: string;
  buttonColor: string;
  firstNameRequired: boolean;
  lastNameRequired: boolean;
}

// POST route to save form widget settings
router.post(
  "/",
  async (req: Request<{}, {}, IFormWidgetBody>, res: Response) => {
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
      // Cast error to Error object to access the message property
      const err = error as Error;
      res.status(500).json({ error: err.message });
    }
  }
);

export default router;
