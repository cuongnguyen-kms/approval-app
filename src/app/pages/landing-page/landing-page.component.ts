import { Component, OnInit } from '@angular/core';
import { ApprovalService } from '../../services/approval.service';
import { NotificationService } from '../../services/notification.service';
import { ApprovalRequest } from '../../models/approval-request.model';
import { ApprovalResponse } from '../../models/approval-response.model';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  instanceId: string | null = null;
  responseMessage: string | null = null;

  constructor(private approvalService: ApprovalService, private notificationService: NotificationService) { }

  ngOnInit(): void {
  }

  private createApprovalRequest(): ApprovalRequest {
    return {
      RequestId: 'REQ-' + new Date().getTime().toString(),
      RequesterEmail: 'cuongqnguyen@kms-technology.com',
      RequestDate: new Date().toISOString()
    };
  }

  onStartApproval(): void {
    const request = this.createApprovalRequest();
    this.approvalService.startApproval(request).subscribe({
      next: (response: ApprovalResponse) => {
        if (response?.InstanceId) {
          this.instanceId = response.InstanceId;
          this.notificationService.success(response.Message || 'Approval process started!');
        } else {
          this.notificationService.error('Unexpected API response!');
        }
      },
      error: (err) => {
        this.notificationService.error(`Error: ${err.error.error}`);
      },
      complete: () => { }
    });
  }

  onApprove(): void {
    if (!this.instanceId) {
      this.responseMessage = 'Error: No active approval process found!';
      return;
    }

    this.approvalService.approve(this.instanceId).subscribe({
      next: (response: ApprovalResponse) => {
        this.notificationService.success(response.Message || 'Approval successful!');
      },
      error: (err) => {
        this.notificationService.error(`Error: ${err.error.error}`);
      },
      complete: () => {
        // Optionally handle completion
      }
    });
  }

  onReject(): void {
    if (!this.instanceId) {
      this.responseMessage = 'Error: No active approval process found!';
      return;
    }

    this.approvalService.reject(this.instanceId).subscribe({
      next: (response: ApprovalResponse) => {
        this.notificationService.success(response.Message || 'Rejection successful!');
      },
      error: (err) => {
        this.notificationService.error(`Error: ${err.error.error}`);
      },
      complete: () => {
        // Optionally handle completion
      }
    });
  }

}
