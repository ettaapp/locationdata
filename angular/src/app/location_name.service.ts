import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { defaultHttpOptions } from './http.config';
import {Observable} from 'rxjs';
import {ServerResponse} from './interfaces';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class locationNameService {

  private _locationsUrl = "http://localhost:5000/location_names"
  private locationNameUrl = "http://localhost:3000/api/v1/location_name"
  private http: HttpClient;

    constructor(http: HttpClient) {
        this.http = http;
    }

  apiLocation(){
    let getUrl = this._locationsUrl;
    console.log(getUrl);
    return this.http.get<any>(getUrl)
  }

  getLocationFromDB(){
    return this.http.get<any>(this.locationNameUrl)
  }
  getLocationByName(name: string): Observable<ServerResponse> {
    const searchUrl = `${this.locationNameUrl}/${name}`;
    return this.http.get<any>(searchUrl);
}
  addLocationName(data,correct, int){
      console.log(data)
      data = {words:{ suggestion: data.word, correct: correct}, index: int}
      console.log(data)
      return this.http.post<any>(this.locationNameUrl,data,defaultHttpOptions)
  }
}
