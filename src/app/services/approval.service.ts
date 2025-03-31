import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ApprovalRequest } from '../models/approval-request.model';
import { ApprovalResponse } from '../models/approval-response.model';

@Injectable({
  providedIn: 'root'
})
export class ApprovalService {
  private instanceIdKey = 'approvalInstanceId';
  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  setInstanceId(instanceId: string) {
    sessionStorage.setItem(this.instanceIdKey, instanceId);
  }

  getInstanceId(): string | null {
    return sessionStorage.getItem(this.instanceIdKey);
  }

  clearInstanceId() {
    sessionStorage.removeItem(this.instanceIdKey);
  }

  startApproval(request: ApprovalRequest): Observable<ApprovalResponse> {
    return this.http.post<ApprovalResponse>(`${this.apiUrl}/approval/start`, request);
  }

  approve(instanceId: string): Observable<ApprovalResponse> {
    return this.http.post<ApprovalResponse>(`${this.apiUrl}/approval/approve/${instanceId}`, null);
  }

  reject(instanceId: string): Observable<ApprovalResponse> {
    return this.http.post<ApprovalResponse>(`${this.apiUrl}/approval/reject/${instanceId}`, null);
  }
}
