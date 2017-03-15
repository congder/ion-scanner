<<<<<<< HEAD
import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

=======
import { Component} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '../../utils/HttpClient'
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
>>>>>>> 5f39c8237879b88bd89bed7473e37d5ed819b078
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
<<<<<<< HEAD
=======
form;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public httpDelegate: HttpClient)
 {
>>>>>>> 5f39c8237879b88bd89bed7473e37d5ed819b078

  constructor(public navCtrl: NavController) {

  }
<<<<<<< HEAD

=======
  // 去注册
click(){
var data = {

  name : this.form.value.name
}

let url = 'http://10.10.10.237:8081/register';
  alert(this.form.value.name);

this.httpDelegate.getDataFromUrl<any>(url, data, {}).then(any => {  
    // console.log(model.id) 
    alert('success'); 
}).catch(err => {  
    // alert(err)  
})  

  
    }
>>>>>>> 5f39c8237879b88bd89bed7473e37d5ed819b078
}
