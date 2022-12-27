import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PopoverModule.forRoot(),
    BsDropdownModule.forRoot(),
    ToastrModule.forRoot({
      progressAnimation: 'decreasing',
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
  ],
  exports: [
    PopoverModule,
    BsDropdownModule,
    ToastrModule,
  ]
})
export class SharedModule { }
