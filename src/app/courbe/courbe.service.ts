import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Data } from '../Model/data';
import { HttpResponse } from '@angular/common/http/src/response';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class CourbeService {

  
  baseUrl = "https://sensioapiversion.herokuapp.com/api/data";
  //private http: HttpClient;
    constructor(private _http: HttpClient) {
      //this.http = _http;
     }

     private url(args: any[]) {
      return this.baseUrl && args && this.baseUrl + '/' + args.join('/');
  }
    
    dailyForecast() {
      //return this._http.get("http://samples.openweathermap.org/data/2.5/history/city?q=Warren,OH&appid=b6907d289e10d714a6e88b30761fae22")
      return this._http.get<Data[]>(this.baseUrl)
        .map(result => result);
    }

  }