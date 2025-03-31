import { Component, OnInit } from '@angular/core';
import { ApprovalService } from '../../services/approval.service';
import { NotificationService } from '../../services/notification.service';
import { ApprovalRequest } from '../../models/approval-request.model';
import { ApprovalResponse } from '../../models/approval-response.model';

import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  instanceId: string | null = null;
  responseMessage: string | null = null;
  requesterEmail = environment.requesterEmail;
  isLoading: boolean = false;

  constructor(private approvalService: ApprovalService, private notificationService: NotificationService) { }

  ngOnInit(): void {
  }

  private createApprovalRequest(): ApprovalRequest {
    return {
      RequestId: 'REQ-' + new Date().getTime().toString(),
      RequesterEmail: this.requesterEmail,
      RequestDate: new Date().toISOString()
    };
  }

  private isInstanceIdValid(): boolean {
    return !!this.approvalService.getInstanceId();
  }

  setLoadingState(state: boolean) {
    if (!state) {
      // Introduce a small delay before hiding the loading indicator
      setTimeout(() => {
        this.isLoading = state;
      }, 500); // 500ms delay for better UX
    } else {
      this.isLoading = state;
    }
  }

  onStartApproval(): void {
    this.setLoadingState(true);
    const request = this.createApprovalRequest();
    this.approvalService.startApproval(request).subscribe(
      (response: ApprovalResponse) => {
        this.approvalService.setInstanceId(response.InstanceId);
        this.notificationService.success('Approval process started successfully');
        this.setLoadingState(false);
      },
      () => this.setLoadingState(false));
  }

  onApprove(): void {
    if (!this.isInstanceIdValid()) {
      this.notificationService.warning('Instance ID is required. Start approval first.');
      return;
    }
    this.setLoadingState(true);
    this.approvalService.approve(this.approvalService.getInstanceId()!).subscribe(
      () => {
        this.notificationService.success('Approval successful');
        this.setLoadingState(false);
      },
      () => this.setLoadingState(false)
    );
  }

  onReject(): void {
    if (!this.isInstanceIdValid()) {
      this.notificationService.warning('Instance ID is required. Start approval first.');
      return;
    }
    this.setLoadingState(true);
    this.approvalService.reject(this.approvalService.getInstanceId()!).subscribe(
      () => {
        this.notificationService.success('Rejection successful');
        this.setLoadingState(false);
      },
      () => this.setLoadingState(false)
    );
  }
}
