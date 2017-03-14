import { Component} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.form = new FormGroup({
      name: new FormControl("", Validators.required),
     
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
click(){

    alert('去注册' + this.form.value.name);
    
;
}
}
