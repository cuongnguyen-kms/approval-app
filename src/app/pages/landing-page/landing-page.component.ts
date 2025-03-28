import { Component, OnInit } from '@angular/core';
import { ApprovalService } from 'src/app/services/approval.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private approvalService: ApprovalService) { }

  ngOnInit(): void {
  }

  startApproval(): void {
    this.approvalService.startApproval().subscribe({
      next: () => alert('Approval process started. Check your email!'),
      error: (err) => console.error('Error:', err)
    });
  }

  approve(): void {
    this.approvalService.approve().subscribe({
      next: () => alert('Approval completed. Email sent!'),
      error: (err) => console.error('Error:', err)
    });
  }

  reject(): void {
    this.approvalService.reject().subscribe({
      next: () => alert('Approval rejected. Email sent!'),
      error: (err) => console.error('Error:', err)
    });
  }

}
