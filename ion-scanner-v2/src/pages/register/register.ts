
import { Component} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '../../utils/HttpClient'
import { ScanPage } from '../scan/scan';
import {LoginPage} from '../login/login';
// import {
//   FormGroup,
//   FormControl,
//   Validators
// } from '@angular/forms';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

   form;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public httpDelegate: HttpClient){
// this.form = new FormGroup({
//       account: new FormControl("", Validators.required),
//       name: new FormControl("", Validators.required),
//       password: new FormControl("", Validators.required)
      
//     });
      }
 

  // 去注册
registerClick(){
    //   if(this.form.value.account.length<0){
    //     alert('请输入手机号!');
    //     return;
    //   }
    //     if(this.form.value.name.length<0){
    //     alert('请输入姓名!');
    //     return;
    //   }
    //   if(this.form.value.password.length<0){
    //     alert('请输入密码!');
    //     return;
    //   }
    // var data = {
    // account : this.form.value.account,
    // name : this.form.value.name,
    // password : this.form.value.password
    // }

    // let url = 'http://10.10.10.237:8081/register';
    //   // alert(this.form.value.name);

    // this.httpDelegate.getDataFromUrl<any>(url, data, {}).then(any => {  
    //     // console.log(model.id) 
    //     alert('注册成功!'); 
    //     this.navCtrl.push(ScanPage);
    // }).catch(err => {  
    //     alert(err)  
    // })  
   this.navCtrl.push(ScanPage);
      
        }

      //   loginClick(){
      // this.navCtrl.push(LoginPage);
      // // this.navCtrl.popTo;
      //   }



}
