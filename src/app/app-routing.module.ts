import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreateAgentComponent } from './create-agent/create-agent.component';
import { CreateBranchComponent } from './create-branch/create-branch.component';
import { CreateBranchManagerComponent } from './create-branch-manager/create-branch-manager.component';


const routes: Routes = [

  {path:'', component:LoginComponent},
  {path:'create-agent', component:CreateAgentComponent},
  {path:'create-branch', component:CreateBranchComponent},
  {path:'create-branch-manager', component:CreateBranchManagerComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
