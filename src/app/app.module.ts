import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { SuccessComponent } from './success/success.component';
import { ToastrModule } from 'ngx-toastr';
import { TokenInterceportService } from './interceptors/authenticator-interceport';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SignupComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 1000,
      progressBar: true,
      progressAnimation: "increasing",
      preventDuplicates: true
    })
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceportService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
