import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TokenStorageService } from './shared/_services/token-storage.service';
import { RequestHttpInterceptor } from './shared/_helpers/auth.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AddblogComponent } from './addblog/addblog.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddblogComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,BrowserAnimationsModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: RequestHttpInterceptor, multi: true }, TokenStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
