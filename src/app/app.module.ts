// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
// import { AppComponent } from './app.component';
// import { VerifyComponent } from './verify/verify.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.route';
// import { UserformComponent } from './userform/userform.component';
import { CommonModule } from '@angular/common';
import { DocumentselectionComponent } from './documentselection/documentselection.component';
import { DocumentaccessComponent } from './documentaccess/documentaccess.component';
import { SuccessuploaddocumentComponent } from './successuploaddocument/successuploaddocument.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { DisplaydocumentComponent } from './displaydocument/displaydocument.component';

@NgModule({
  declarations: [
    AppComponent,LoginComponent, DocumentselectionComponent, DocumentaccessComponent, SuccessuploaddocumentComponent, AuthenticationComponent, DisplaydocumentComponent],
  imports: [ BrowserModule, FormsModule ,ReactiveFormsModule,CommonModule,HttpClientModule,RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


