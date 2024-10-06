import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-preview',
  standalone: true, // <-- Mark the component as standalone
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css'],
  imports: [CommonModule, FormsModule], // <-- Import CommonModule and FormsModule
})
export class PreviewComponent {
  @Input() settings: any = {
    title: 'Default Title',
    subtitle: 'Default Subtitle',
    fontSize: '18px',
    submitButtonText: 'Submit',
    buttonColor: '#007bff',
    firstNameRequired: true,
    lastNameRequired: false,
  };
  
}
