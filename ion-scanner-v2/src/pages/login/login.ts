import { Component } from '@angular/core';
import { HttpClient } from '../../utils/HttpClient'
import { NavController,NavParams } from 'ionic-angular';
import { ScanPage } from '../scan/scan';
import { RegisterPage } from '../register/register';
import { IdentifyingCodePage } from '../identifying-code/identifying-code';


import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  loginForm;
  formBuilder;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public httpDelegate: HttpClient) {
    this.loginForm = new FormGroup({
      account: new FormControl("", Validators.required,Validators.minLength(4)),
      password: new FormControl("", Validators.required,Validators.minLength(4))
    });
//     loginForm = this.formBuilder.group({

// 'LoginID': ['admin@163.com', [Validators.required, Validators.minLength(4)]],

// 'LoginPwd': ['123456', [Validators.required, Validators.minLength(4)]]

// });
  }
    loginClick(){
   
        var data = {

          account : this.loginForm.value.account,
          password : this.loginForm.value.password
        };

        let url = 'http://10.10.10.237:8081/register';


        this.httpDelegate.getDataFromUrl<any>(url, data, {}).then(any => {  
            // console.log(model.id) 
            // alert('success'); 
        }).catch(err => {  
            // alert(err)  
        })  
        // alert(this.loginForm.value.account+'显示输入的账号密码   '+ this.loginForm.value.password); 
        this.navCtrl.push(ScanPage);
    }
    registerClick(){
         this.navCtrl.push(RegisterPage);

    }
    forgetClick(){
        this.navCtrl.push(IdentifyingCodePage);
    }
   
}
