import { Component, OnInit } from '@angular/core';
import { ApprovalService } from '../../services/approval.service';
import { ApprovalRequest } from '../../models/approval-request.model';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private approvalService: ApprovalService) { }

  ngOnInit(): void {
  }

  private createApprovalRequest(): ApprovalRequest {
    return {
      requestId: 'REQ-' + new Date().getTime().toString(),
      requesterEmail: 'cuongqnguyen@kms-technology.com',
      requestDate: new Date().toISOString()
    };
  }

  onStartApproval(): void {
    const request = this.createApprovalRequest();
    this.approvalService.startApproval(request).subscribe({
      next: () => alert('Approval started successfully!'),
      error: () => alert('Failed to start approval.')
    });
  }

  onApprove(): void {
    const request = this.createApprovalRequest();
    this.approvalService.approve(request).subscribe({
      next: () => alert('Approval successful!'),
      error: () => alert('Failed to approve request.')
    });
  }

  onReject(): void {
    const request = this.createApprovalRequest();
    this.approvalService.reject(request).subscribe({
      next: () => alert('Approval rejected successfully!'),
      error: () => alert('Failed to reject request.')
    });
  }

}
