
import { Component} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '../../utils/HttpClient'
import { ScanPage } from '../scan/scan';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

   form;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public httpDelegate: HttpClient){


              }
 

  // 去注册
loginRegister(){
// var data = {

//   name : this.form.value.name
// }

// let url = 'http://10.10.10.237:8081/register';
//   alert(this.form.value.name);

// this.httpDelegate.getDataFromUrl<any>(url, data, {}).then(any => {  
//     // console.log(model.id) 
//     alert('success'); 
// }).catch(err => {  
//     // alert(err)  
// })  
this.navCtrl.push(ScanPage)
  
    }

}
