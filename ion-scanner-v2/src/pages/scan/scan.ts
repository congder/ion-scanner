import { Component } from '@angular/core';
import {BarcodeScanner} from 'ionic-native';
import { NavController } from 'ionic-angular';
import { Platform, ActionSheetController } from 'ionic-angular';
import {ConfirmPage} from '../confirm/confirm';

@Component({
  templateUrl: 'scan.html',
  selector:'page-scan'
})
export class ScanPage {
  constructor(
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController,
    public navCtrl : NavController
  ) { }

  openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      cssClass: 'page-scan',
      buttons: [
        {
          text: '签到',
          icon: !this.platform.is('ios') ? 'share' : null,
          handler: () => {
            console.log('您已签到！');
          }
        },
        {
          text: '签退',
          icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
          handler: () => {
            console.log('您已签退');
          }
        },
        {
          text: '取消',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('您已取消');
          }
        }
      ]
    });
    actionSheet.present();
  }
     // 去扫码
  scan(){
    BarcodeScanner.scan().then((result) => {
      if (!result.cancelled) {

        this.navCtrl.push(ConfirmPage,{item:result.text});

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

