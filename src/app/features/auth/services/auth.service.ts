import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl =
    'https://cruzy.pythonanywhere.com/api/employee-registration/';

  constructor(private http: HttpClient) {}

  registerEmployee(employeeData: any) {
    return this.http.post(this.apiUrl, employeeData);
  }
}
