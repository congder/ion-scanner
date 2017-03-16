import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ResetPwdPage} from '../reset-pwd/reset-pwd';

/*
  Generated class for the IdentifyingCode page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-identifying-code',
  templateUrl: 'identifying-code.html'
})
export class IdentifyingCodePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad IdentifyingCodePage');
  }

  confirmClick(){
  		this.navCtrl.push(ResetPwdPage);
  }

}
