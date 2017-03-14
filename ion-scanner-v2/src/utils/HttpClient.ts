
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";
import { Platform } from 'ionic-angular';
import { HTTP } from 'ionic-native'
/*
 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()

export class HttpClient {
   constructor(public platform: Platform)
  {
  }
  getDataFromUrl<T>(url: string, body: any, headers: any): Promise<T> {  
    console.log('sendRequest')  
    return HTTP.post(url, body,headers).then(res => {  
        return JSON.parse(res.data)  
    }).catch(err => {  
        return err.error  
    })  
}

    

}