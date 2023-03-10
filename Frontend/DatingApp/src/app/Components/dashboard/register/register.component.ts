import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/_Services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @Output() cancelRegister = new EventEmitter();
  model:any = {};

  constructor(
      private accountService:AccountService,
      private toastr : ToastrService,
      ) { }

  ngOnInit(): void {
  }

  register(){
    this.accountService.register(this.model).subscribe({
      next:response=>{
        console.log(response);
        this.cancel();
      },
      error:error=>this.toastr.error(error.error),
    });
  }

  cancel(){
    this.cancelRegister.emit(false);
  }

}
