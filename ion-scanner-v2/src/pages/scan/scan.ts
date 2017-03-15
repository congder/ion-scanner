import { Component } from '@angular/core';


import { Platform, ActionSheetController } from 'ionic-angular';


@Component({
  templateUrl: 'scan.html',
  selector:'page-scan'
})
export class ScanPage {
  constructor(
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController
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
}

