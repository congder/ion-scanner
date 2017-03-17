import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {LoginPage} from '../login/login';
/*
  Generated class for the ResetPwd page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-reset-pwd',
  templateUrl: 'reset-pwd.html'
})
export class ResetPwdPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetPwdPage');
  }
loginClick()
{
  //  this.navCtrl.popToRoot; ?  为什么回不到根控制器
   this.navCtrl.popTo( this.navCtrl.getByIndex(0));

}
}
