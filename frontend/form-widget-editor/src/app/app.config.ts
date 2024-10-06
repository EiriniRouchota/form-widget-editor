import { ApplicationConfig, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule for ngModel
import { routes } from './app.routes';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PreviewComponent } from './components/preview/preview.component';
import { ColorSketchModule } from 'ngx-color/sketch';
import { ColorPickerComponent } from 'ngx-color-picker';
import { HttpClientModule } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom(BrowserModule), // <-- Make sure BrowserModule is imported
    importProvidersFrom(FormsModule), // <-- Make sure FormsModule is imported
    SidebarComponent, // Add SidebarComponent
    PreviewComponent, // Add PreviewComponent
    importProvidersFrom(ColorSketchModule),
    importProvidersFrom(HttpClientModule), // <-- Import HttpClientModule
  ],
};
