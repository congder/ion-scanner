import { Component } from '@angular/core';
// import {BarcodeScanner} from 'ionic-native';
import { NavController ,NavParams} from 'ionic-angular';
import {ScanPage} from '../scan/scan';

// import {RegisterPage} from '../register/register';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  ifSuccess:number;

  public text: String;
  public format: String;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
     this.ifSuccess = navParams.get('item');
  }
    ionViewDidLoad() {

      
    }
  // 去打卡按钮页
  backScan(){
    alert(this.ifSuccess);
   this.navCtrl.popTo(ScanPage);
  }
}
