import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CprService} from 'src/app/service/cpr.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthenticationService} from './service/authentication.service';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { CreateAgentComponent } from './create-agent/create-agent.component';
import { AgentService } from './service/agent.service';
import {PolicyService} from 'src/app/service/policy.service';
import {CustomerService} from 'src/app/service/customer.service';
import {CeoService} from 'src/app/service/ceo.service';
import {BranchService} from 'src/app/service/branch.service';
import {BranchManagerService} from 'src/app/service/branch-manager.service';
import { HeaderComponent } from './header/header.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CreateCeoComponent } from './create-ceo/create-ceo.component';
import { CreateCprComponent } from './create-cpr/create-cpr.component';
import { CreateBranchComponent } from './create-branch/create-branch.component';
import { CreateBranchManagerComponent } from './create-branch-manager/create-branch-manager.component';
import { CreatePolicyComponent } from './create-policy/create-policy.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateAgentComponent,
    HeaderComponent,
    CreateCustomerComponent,
    CreateCeoComponent,
    CreateCprComponent,
    CreateBranchComponent,
    CreateBranchManagerComponent,
    CreatePolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, FormsModule
  ],
  providers: [AuthenticationService,AgentService, PolicyService,
     CprService,CustomerService, CeoService, BranchService,
      BranchManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
