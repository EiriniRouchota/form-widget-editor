import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ColorPickerComponent } from 'ngx-color-picker';
import { ColorSketchModule } from 'ngx-color/sketch';
import { FormWidgetService } from '../../form-widget.service';

@Component({
  selector: 'app-sidebar',
  standalone: true, // <-- Mark the component as standalone
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  imports: [CommonModule, FormsModule, ColorSketchModule], // <-- Add ngx-color module], // <-- Import CommonModule and FormsModule
})
export class SidebarComponent {
  formTitle: string = 'Default Title';
  formSubtitle: string = 'Default Subtitle';
  fontSize: string = '18px';
  submitButtonText: string = 'Submit';
  buttonColor: string = '#007bff'; // Default Bootstrap Primary color
  showColorPicker: boolean = false; // Control visibility of color picker
  // Toggle variables for controlling required status
  firstNameRequired: boolean = true; // Default to required
  lastNameRequired: boolean = true; // Default to required

  // Toggle color picker visibility
  toggleColorPicker() {
    this.showColorPicker = !this.showColorPicker;
  }

  // Close color picker when a color is selected
  closeColorPicker() {
    this.showColorPicker = false;
  }
  // Confirm color selection and close the color picker
  confirmColor() {
    this.buttonColor = this.buttonColor; // Assign the temp color to the button color
    this.showColorPicker = false; // Close the color picker
  }
  @Output() settingsChanged = new EventEmitter<any>();

  constructor(private formWidgetService: FormWidgetService) {} // Inject the service here
  onSave() {
    const settings = {
      title: this.formTitle,
      subtitle: this.formSubtitle,
      fontSize: this.fontSize,
      submitButtonText: this.submitButtonText,
      buttonColor: this.buttonColor,
      firstNameRequired: this.firstNameRequired,
      lastNameRequired: this.lastNameRequired,
    };

    // Emit settings to parent component (if needed)
    this.settingsChanged.emit(settings);

    // Send form data to the backend via the service
    this.formWidgetService.saveFormWidget(settings).subscribe(
      (response) => {
        console.log('Form widget saved successfully', response);
      },
      (error) => {
        console.error('Error saving form widget', error);
      }
    );
  }
}
