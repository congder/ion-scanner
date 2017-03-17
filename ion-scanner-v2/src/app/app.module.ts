import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// 注意,此处路径是带 pages
import { HomePage } from '../pages/home/home';
import { ScanPage } from '../pages/scan/scan';
import { RegisterPage } from '../pages/register/register';
import { HttpClient } from '../utils/HttpClient';
import { LoginPage } from '../pages/login/login';
import { ConfirmPage} from '../pages/confirm/confirm';
import { IdentifyingCodePage} from '../pages/identifying-code/identifying-code';
import { ResetPwdPage} from '../pages/reset-pwd/reset-pwd';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ScanPage,
    RegisterPage,
    LoginPage,
    ConfirmPage,
    IdentifyingCodePage,
    ResetPwdPage
  ],
  imports: [
    IonicModule.forRoot(MyApp,{
    backButtonText: '返回'
    })
        
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ScanPage,
    RegisterPage,
    LoginPage,
    ConfirmPage,
    IdentifyingCodePage,
    ResetPwdPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},HttpClient]
})
export class AppModule {}
