import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ListsComponent } from './Components/lists/lists.component';
import { MemberDetailComponent } from './Components/members/member-detail/member-detail.component';
import { MemberListComponent } from './Components/members/member-list/member-list.component';
import { MessagesComponent } from './Components/messages/messages.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {path:'members',component:MemberListComponent},
      {path:'members/:id',component:MemberDetailComponent},
      {path:'lists',component:ListsComponent},
      {path:'messages',component:MessagesComponent},
    ]
  },
  {path:'**',component:DashboardComponent,pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
