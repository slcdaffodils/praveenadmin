import { Component } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { ChartModule } from 'angular2-highcharts';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery';
//import { DatePickerOptions, DateModel  } from 'ng2-datepicker';
import {NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';
import {NgbTimepickerConfig} from '@ng-bootstrap/ng-bootstrap';
import { NetworksearchPipe} from '../../filters/networksearch.pipe'; 
import {EndPoints} from '../../common/endpoints';
@Component({
  selector: 'networkflow',
  template: `
  
   <div class="col-md-12">
    <div [hidden]="ipadd.valid || ipadd.pristine"
      class="alert alert-danger">      
      <div [hidden]="!ipadd.hasError('pattern')">IP address is not valid</div>
   </div>
    <form class="form-inline">
      <div class="form-group">
        <div class="input-group" style="padding-top:12px">
          <input  class="form-control" placeholder="yyyy-mm-dd"
                 name="saccessDate" [(ngModel)]="searchModel.saccessDate" ngbDatepicker #d="ngbDatepicker">
          <button class="input-group-addon" (click)="d.toggle()" type="button">
            <img src="img/calendar-icon.svg" style="width: 1.2rem; height: 1rem; cursor: pointer;"/>
          </button>

        </div>
         <!--div>
            <ngb-timepicker name="time" [(ngModel)]="time" [seconds]="seconds"></ngb-timepicker>
         </div-->
         <div class="checkbox">
            <label>
              &nbsp;&nbsp;Source IP
            </label>
         </div>
         <div>
           <input name="ssourceIp" [(ngModel)]="searchModel.ssourceIp" type="text" class="form-control"
             pattern="(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)"
             #ipadd="ngModel"
           > 

         </div>
            &nbsp;&nbsp;<button type="button" class="btn btn-primary" (click)="searchNetflow()" [disabled]="ipadd.hasError('pattern')">
                Search
            </button>
        
        </div>
      </form>
 </div>
<div class="col-md-12">
    <ba-card cardTitle="Networkflow Report" baCardClass="with-scroll table-panel">
      <div class="horizontal-scroll" >
       
       <table class="table table-bordered" >
           
         <thead>
       
            <tr>
           
              <th>Access Date/Time</th>
              <th class="align-right">Source IP</th>
              <th class="align-right">Destination IP</th>
              <th class="align-right">Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let item of dataRecieved.hits.hits | networksearch:{'ssourceIp':searchModel.ssourceIp,'saccessDate':searchModel.saccessDate} ">
                <td ngClass="nowrap">{{ item._source.accessDate }}</td>
                <td class="align-right">{{ item._source.sourceIp }}</td>
                <td class="align-right">{{ item._source.destinationIp }}</td>
                <td class="align-right">{{ item._source.duration }}</td>
              </tr>
               <tr>
                 <td colspan="4">
                 <div style="float:right">
                   <ngb-pagination [(collectionSize)]="dataRecieved.hits.total" [(page)]="currentPage" rotate="true" size="sm" pageSize="100" maxSize="10"></ngb-pagination>
                   &nbsp;
                   </div>
                 </td>
               </tr>
            </tbody>
         
          </table>
        </div>
      </ba-card>
</div>


`,
})
export class NetworkflowComponent {
   //date: DateModel;
  //options: DatePickerOptions;
  time: NgbTimeStruct = {hour: 13, minute: 30, second: 30};
  seconds = true;
  searchedData:any;
  currentPage:any;
  ssourceIp:any;
  saccessDate:any;
  model={"mobile":""};
  searchModel={"saccessDate":"","ssourceIp":""};

  dataRecieved={
    "took": 1,
    "timed_out": false,
    "_shards": {
      "total": 5,
      "successful": 5,
      "skipped": 0,
      "failed": 0
    },
    "hits": {
      "total": 69454,
      "max_score": 2.2216463,
      "hits": [
        {
          "_index": "netflow",
          "_type": "sourceIp",
          "_id": "25064",
          "_score": 2.2216463,
          "_source": {
            "sourceIp": "82.166.121.2:47809",
            "destinationIp": "182.231.114.48:6881",
            "accessDate": "2017-09-17 08:54:50.208",
            "duration": 0,
            "packets": "1",
            "bytes": "48",
            "flows": "1",
            "protocol": "TCP"
          }
        },
        {
          "_index": "netflow",
          "_type": "sourceIp",
          "_id": "25095",
          "_score": 2.2216463,
          "_source": {
            "sourceIp": "82.166.121.2:42402",
            "destinationIp": "203.205.146.23:36688",
            "accessDate": "2017-09-17 08:54:50.220",
            "duration": 1.474,
            "packets": "3",
            "bytes": "120",
            "flows": "1",
            "protocol": "TCP"
          }
        },
        {
          "_index": "netflow",
          "_type": "sourceIp",
          "_id": "25149",
          "_score": 2.2216463,
          "_source": {
            "sourceIp": "82.166.121.2:58636",
            "destinationIp": "216.58.213.106:443",
            "accessDate": "2017-09-17 08:54:50.251",
            "duration": 0,
            "packets": "1",
            "bytes": "51",
            "flows": "1",
            "protocol": "UDP"
          }
        },
        {
          "_index": "netflow",
          "_type": "sourceIp",
          "_id": "25186",
          "_score": 2.2216463,
          "_source": {
            "sourceIp": "82.166.121.2:34622",
            "destinationIp": "156.223.102.16:1103",
            "accessDate": "2017-09-17 08:54:50.269",
            "duration": 1.53,
            "packets": "5",
            "bytes": "6905",
            "flows": "1",
            "protocol": "UDP"
          }
        },
        {
          "_index": "netflow",
          "_type": "sourceIp",
          "_id": "25238",
          "_score": 2.2216463,
          "_source": {
            "sourceIp": "82.166.121.2:58560",
            "destinationIp": "216.58.208.129:443",
            "accessDate": "2017-09-17 08:54:50.290",
            "duration": 1.692,
            "packets": "61",
            "bytes": "4977",
            "flows": "1",
            "protocol": "UDP"
          }
        },
        {
          "_index": "netflow",
          "_type": "sourceIp",
          "_id": "25272",
          "_score": 2.2216463,
          "_source": {
            "sourceIp": "82.166.121.2:49272",
            "destinationIp": "212.29.228.14:443",
            "accessDate": "2017-09-17 08:54:50.312",
            "duration": 0.236,
            "packets": "56",
            "bytes": "4451",
            "flows": "1",
            "protocol": "TCP"
          }
        },
        {
          "_index": "netflow",
          "_type": "sourceIp",
          "_id": "25307",
          "_score": 2.2216463,
          "_source": {
            "sourceIp": "82.166.121.2:48304",
            "destinationIp": "216.58.212.110:443",
            "accessDate": "2017-09-17 08:54:50.327",
            "duration": 0.156,
            "packets": "3",
            "bytes": "1832",
            "flows": "1",
            "protocol": "TCP"
          }
        },
        {
          "_index": "netflow",
          "_type": "sourceIp",
          "_id": "25356",
          "_score": 2.2216463,
          "_source": {
            "sourceIp": "82.166.121.2:54993",
            "destinationIp": "109.226.40.40:123",
            "accessDate": "2017-09-17 08:54:50.357",
            "duration": 0,
            "packets": "1",
            "bytes": "76",
            "flows": "1",
            "protocol": "UDP"
          }
        },
        {
          "_index": "netflow",
          "_type": "sourceIp",
          "_id": "25391",
          "_score": 2.2216463,
          "_source": {
            "sourceIp": "82.166.121.2:55002",
            "destinationIp": "39.32.224.233:60243",
            "accessDate": "2017-09-17 08:54:50.368",
            "duration": 0,
            "packets": "1",
            "bytes": "48",
            "flows": "1",
            "protocol": "UDP"
          }
        },
        {
          "_index": "netflow",
          "_type": "sourceIp",
          "_id": "25475",
          "_score": 2.2216463,
          "_source": {
            "sourceIp": "82.166.121.2:18508",
            "destinationIp": "194.90.0.1:53",
            "accessDate": "2017-09-17 08:54:50.404",
            "duration": 0,
            "packets": "1",
            "bytes": "60",
            "flows": "1",
            "protocol": "UDP"
          }
        }
      ]
    }
  };
  constructor(private http: Http) {
  // this.options = new DatePickerOptions();
  //this.mobile="";
  this.currentPage=1;
  //http://34.210.155.47:8080/netflow?ip=216.58.208.170&start=1505590100&end=1505595215
    http.get(EndPoints.getEndPoint()+'appsummary/UAT?start=1401889760&end=1502089760').subscribe((res) => {
   // console.log(res);
   //  this.searchedData=res.json();
     //console.log("json", res);
     this.dataRecieved=this.dataRecieved;


    });
  }

  searchNetflow(){
    let addZeroToLoneFigure = (n) => n.toString().length === 1 ? '0' + n : n.toString();
    
    let year=this.searchModel.saccessDate['year'];
    let month=this.searchModel.saccessDate['month'];
    let day=this.searchModel.saccessDate['day'];

    let searchDate="";
    if(year)
        searchDate= year+"-"+addZeroToLoneFigure(month)+"-"+addZeroToLoneFigure(day);
   


     let paramsSourceIp="sourceIp="+this.searchModel.ssourceIp;
     let paramsDate="accessDate="+searchDate;
     let finalParam=paramsSourceIp+"&"+paramsDate+"&page="+this.currentPage;
     console.log(finalParam);
     this.http.get('http://34.210.155.47:8080/appsummary/UAT?start=1401889760&end=1502089760&'+finalParam).subscribe((res) => {
       console.log("getting daata");

     });
  }
  
}
