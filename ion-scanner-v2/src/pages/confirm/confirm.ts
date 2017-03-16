import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Confirm page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-confirm',
  templateUrl: 'confirm.html'
})
export class ConfirmPage {
date: string = new Date().toLocaleDateString();
time: string = new Date().toTimeString();
week: string = new Date().toDateString();
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

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
          case 'Fir':  this.week = '星期五';
            break;
          case 'Sat':  this.week = '星期六';
            break;
          case 'Sun':  this.week = '星期日';
            break;
          default :break;

    }
    //  alert(this.date +  this.time);
  }

}
