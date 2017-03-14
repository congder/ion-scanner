import { Component } from '@angular/core';
import {BarcodeScanner} from 'ionic-native';
import { NavController } from 'ionic-angular';
import {ScanPage} from '../scan/scan';
import {RegisterPage} from '../register/register';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  public text: String;
  public format: String;
  constructor(public navCtrl: NavController) {
  }
  // 去注册
  registerClick()
  {

  //  alert("前往注册!");
   this.navCtrl.push(RegisterPage);
  }
  // 去扫码
  scan(){
    BarcodeScanner.scan().then((result) => {
      if (!result.cancelled) {

        this.navCtrl.push(ScanPage,{item:result.text});

        // alert("text:then 1" + result.text);
        // alert("format: " + result.format);
      }

    }).then(function (event) {

      //  alert("text:" + 'xxxxxx');

       event;
    })
    .catch((err) => {
      alert('err: ' + err);
    
                
    })
  }
}
