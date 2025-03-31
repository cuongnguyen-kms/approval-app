import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-action-buttons',
  templateUrl: './action-buttons.component.html',
  styleUrls: ['./action-buttons.component.scss']
})
export class ActionButtonsComponent implements OnInit {
  @Input() loading: boolean = false;
  @Output() startApproval = new EventEmitter<void>();
  @Output() approve = new EventEmitter<void>();
  @Output() reject = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

}
