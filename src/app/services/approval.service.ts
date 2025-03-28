import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApprovalService {
  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  startApproval(): Observable<void> {
    console.log('Approval process started.');
    return this.http.post<void>(`${this.apiUrl}/startApproval`, {});
  }

  approve(): Observable<void> {
    console.log('Approval granted.');
    return this.http.post<void>(`${this.apiUrl}/approve`, {});
  }

  reject(): Observable<void> {
    console.log('Approval rejected.');
    return this.http.post<void>(`${this.apiUrl}/reject`, {});
  }
}
