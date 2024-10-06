import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PreviewComponent } from './components/preview/preview.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ColorSketchModule } from 'ngx-color/sketch';
import { ColorPickerComponent } from 'ngx-color-picker';

@Component({
  selector: 'app-root',
  standalone: true, // <-- Mark the component as standalone
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    PreviewComponent,
    SidebarComponent,
    ColorSketchModule, // <-- Add the ColorSketchModule here
  ],
})
export class AppComponent {
  formSettings = {};

  onSettingsChanged(newSettings: any) {
    this.formSettings = newSettings;
  }
}
