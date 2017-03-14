import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {RegisterPage} from '../register/register';
import {
  // FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html'
})
export class ScanPage {
// 桌号
text : string ;
//姓名
form;

  constructor(public navCtrl: NavController, public navParams: NavParams) 
  {


  // 桌号:
    this.text = navParams.get('item');

  // 输入的姓名  
    this.form = new FormControl("name", Validators.required);
  //   this.form = new FormGroup({
  //     name: new FormControl("", Validators.required),
      
  //   });
  }

  ionViewDidLoad() {

      //  alert(this.form.value.name);   
    }
  //注册
  register(){

    this.navCtrl.push(RegisterPage);

  }
  //打卡
  click(){

  alert(this.text + '去打卡');

  }
}
