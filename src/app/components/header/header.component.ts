import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  showForm: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  btnClick() {
    this.showForm = !this.showForm;
  }

}
