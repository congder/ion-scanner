import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { HomePage } from '../pages/home/home';
import { ScanPage } from '../pages/scan/scan';
import { RegisterPage } from '../pages/register/register';
import { HttpClient } from '../utils/HttpClient';
import { LoginPage } from '../pages/login/login';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ScanPage,
    RegisterPage,
    LoginPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ScanPage,
    RegisterPage,
    LoginPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},HttpClient]
})
export class AppModule {}
