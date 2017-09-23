import {Injectable} from '@angular/core';

import {BaThemeConfigProvider} from '../../theme';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
@Injectable()
export class NetworkmetricsService {


  //pages\networkmetrics
  private url="http://localhost:4200/assets/data/netmet.json";
  constructor(private _baConfig:BaThemeConfigProvider,private http: Http) {
   // console.log(this._mymap[0].series[0].data);
    //this._data.areaLineData.labels=[];
    //this._data.areaLineData.series=[[]];
    let what=1;
    let jat=18;
    // this._mymap[0].series[0].data.forEach(element => {
    // //  console.log("**************************"+what);
    //     //this._data.areaLineData.labels.push(Number.parseInt(element.timestamp));
    //   //  this._data.areaLineData.series[0].push(Number.parseInt(element.value));
    //    // console.log(this._data.areaLineData.labels);
    //   });
  }

  public getAll(): Observable<any> {
    return this.http.get(this.url).map(this.extractData)
    .catch(this.handleErrorObservable);
    //return this._data;
  }
  private extractData(res: Response) {
      let body = res.json();
          return body;
      }
  private handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
      }
  private handleErrorPromise (error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
      }

}
