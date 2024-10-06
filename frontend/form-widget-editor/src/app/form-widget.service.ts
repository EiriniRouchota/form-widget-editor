import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormWidgetService {
  private apiUrl = 'http://localhost:3000/api/form-widget'; // Backend API endpoint

  constructor(private http: HttpClient) {}

  // Function to send form widget settings to the backend
  saveFormWidget(settings: any): Observable<any> {
    return this.http.post(this.apiUrl, settings);
  }
}
