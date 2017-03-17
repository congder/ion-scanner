import { Component } from '@angular/core';
import {BarcodeScanner} from 'ionic-native';
import { NavController } from 'ionic-angular';
import { Platform, ActionSheetController } from 'ionic-angular';
import { ConfirmPage} from '../confirm/confirm';
import { HomePage } from '../home/home';
@Component({
  templateUrl: 'scan.html',
  selector:'page-scan'
})
export class ScanPage {

date: string = new Date().toLocaleDateString();
time: string = new Date().toTimeString();
week: string = new Date().toDateString();
  

  constructor(
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController,
    public navCtrl : NavController
  ) { 
  
  }
ionViewDidLoad() {
   this.week  = this.week.substr(0,3);
   this.time = this.time.substr(0,5);
        switch(this.week){
          case 'Mon':  this.week = '星期一';
           break;    
          case 'Tue':  this.week = '星期二';
            break;
          case 'Wed':  this.week = '星期三';
            break;
          case 'Thu':  this.week = '星期四';
            break;
          case 'Fri':  this.week = '星期五';
            break;
          case 'Sat':  this.week = '星期六';
            break;
          case 'Sun':  this.week = '星期日';
            break;
          default :break;

    }
    //  alert(this.date +  this.time);
    // this.navCtrl.setBackButtonText()
  }
  openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
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
            
      //  alert("result.text" + result.text);
       //成功跳转到 Home ->comfirm
        this.navCtrl.push(HomePage,{item:'1'});

      }

    })
    .catch((err) => {
      alert('err: ' + err);
      //失败 跳转 home
      this.navCtrl.push(HomePage,{item:'0'});
      
    })
  }

  record(){
  this.navCtrl.push(ConfirmPage);
// alert(this.date)


  }



}

