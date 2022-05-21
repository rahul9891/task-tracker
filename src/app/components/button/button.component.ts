import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() color: string | undefined;
  @Input() text: string | undefined;

  @Output() onClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  clickHandler() {
    this.onClick.emit();
  }

}
