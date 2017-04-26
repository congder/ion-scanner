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
timer;
  ifSuccess;

  public text: String;
  public format: String;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
     this.ifSuccess = navParams.get('item');
  }
    ionViewDidLoad() {
   this.timer = setInterval(()=> {
     // 每隔10秒  刷新时间
    //  console.log('000000 更新');
       this.timer = (new Date().toTimeString()).substr(0,5);
        // 去打卡按钮页
        this.navCtrl.popTo(ScanPage);

      }, 10000);


    }
 ionViewWillLeave(){
			clearInterval(this.timer);
    }

  changeImg(){
    alert(1);
    
  }
}
