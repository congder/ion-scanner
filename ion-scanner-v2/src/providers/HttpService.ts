import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { StorageService } from "./StorageService";
import { UserInfoData } from "./../model/UserInfoData";

@Injectable()
export class HttpService {
    myInfoLocal: any;
    local: Storage;
    constructor(
        private http: Http,
        private storageService: StorageService) {
        //this.local = new Storage(LocalStorage);
    }

    public httpGetWithAuth(url: string) {
        let user = this.storageService.read<UserInfoData>('UserInfo');
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', user.ID + '-' + user.UserToken);
        let options = new RequestOptions({ headers: headers });
        return this.http.get(url, options).toPromise()
            .then(res => res.json())
            .catch(err => {
                this.handleError(err);
            });
    }
    public httpGetNoAuth(url: string) {

        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });
        return this.http.get(url, options).toPromise()
            .then(res => res.json())
            .catch(err => {
                this.handleError(err);
            });
    }
    public httpPostNoAuth(url: string, body: any) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });
        return this.http.post(url, body, options).toPromise()
            .then(res => res.json())
            .catch(err => {
                this.handleError(err);
            });
    }
    // public httpPostWithAuth(body: any, url: string) {

    //     return this.myInfoLocal = this.local.getJson('UserInfo')
    //         .then((result) => {
    //             var headers = new Headers();
    //             headers.append('Content-Type', 'application/json');
    //             headers.append('Authorization', result.ID + '-' + result.UserToken);
    //             let options = new RequestOptions({ headers: headers });
    //             return this.http.post(url, body, options).toPromise();
    //         });
    // }


    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server Error');
    }
}