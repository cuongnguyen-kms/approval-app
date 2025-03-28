import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  startApproval(): void {
    // this.approvalService.startApproval().subscribe({
    //   next: () => alert('Approval process started. Check your email!'),
    //   error: (err) => console.error('Error:', err)
    // });
    console.log('Approval process started. Check your email!');
  }

  approve(): void {
    // this.approvalService.approve().subscribe({
    //   next: () => alert('Approval completed. Email sent!'),
    //   error: (err) => console.error('Error:', err)
    // });
    console.log('Approval completed. Email sent!');
  }

  reject(): void {
    // this.approvalService.reject().subscribe({
    //   next: () => alert('Approval rejected. Email sent!'),
    //   error: (err) => console.error('Error:', err)
    // });
    console.log('Approval rejected. Email sent!');
  }

}
