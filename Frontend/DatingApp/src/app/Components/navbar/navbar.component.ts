import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/_Models/User';
import { AccountService } from 'src/app/_Services/account.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  model:any= {};
  
  constructor(public accountService : AccountService) { }
  
  ngOnInit(): void {
    this.accountService.currentUser$;
  }

  login() {
    this.accountService.login(this.model).subscribe({
      next:response=>{
        console.log(response);
      },
      error:error=>console.log(error)
      
    });

  }
  
  logout() {
    this.accountService.logout();
  }
}
