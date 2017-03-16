import { Component } from '@angular/core';
import { HttpClient } from '../../utils/HttpClient'
import { NavController,NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { IdentifyingCodePage } from '../identifying-code/identifying-code';

// import {
//   FormGroup,
//   FormControl,
//   Validators
// } from '@angular/forms';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  form;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public httpDelegate: HttpClient) {
    // this.form = new FormGroup({
    //   account: new FormControl("", Validators.required),
    //   password: new FormControl("", Validators.required)
    // });
  }
    loginClick(){
          // if(this.form.value.account.length<0){
          //   alert('请输入姓名!');
          //   return;
          // }
          // if(this.form.value.account.length<0){
          //   alert('请输入密码!');
          //   return;
          // }
        // var data = {

        //   account : this.form.value.account,
        //   password : this.form.value.password
        // };

        // let url = 'http://10.10.10.237:8081/register';


        // this.httpDelegate.getDataFromUrl<any>(url, data, {}).then(any => {  
        //     // console.log(model.id) 
        //     alert('success'); 
        // }).catch(err => {  
        //     // alert(err)  
        // })  
        this.navCtrl.push(RegisterPage);
    }
    forgetClick(){
        this.navCtrl.push(IdentifyingCodePage);
    }
    // forgetPwd(){
    //  alert('forgetPwd'); 

    // }
}
