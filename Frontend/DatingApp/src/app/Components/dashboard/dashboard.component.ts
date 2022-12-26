import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  registerMode = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleRegister(){
    this.registerMode = !this.registerMode;
  }
  
  cancelRegisterMode(event: boolean) {
    this.registerMode=event;
  }
}
