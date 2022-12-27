import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/_Models/User';
import { AccountService } from 'src/app/_Services/account.service';
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  model:any= {};
  
  constructor(
        public accountService : AccountService,
        private router:Router,
        private toastr: ToastrService
        ) { }
  
  ngOnInit(): void {
    this.accountService.currentUser$;
  }

  login() {
    this.accountService.login(this.model).subscribe({
      next: _ => this.router.navigateByUrl('/members'),
      error:error=>this.toastr.error(error.error),
      
    });

  }
  
  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/')
  }
}
