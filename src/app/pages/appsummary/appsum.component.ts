import { Component } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { ChartModule } from 'angular2-highcharts';
import {EndPoints} from '../../common/endpoints';
@Component({
  selector: 'appsum',
  styles: [`
chart {
display: block;
height: auto;
}`],
  template: `
  <div class="row" *ngIf="showChart">
  <div class="col-md-6 ">
     <ba-card cardTitle="appsum.response_time" baCardClass="with-scroll">
        <chart style="display:block;width: 100% !important;" type="StockChart" [options]="options['Response Time']" >
           <series>
              <point (select)="onPointSelect('response_time',$event.context)"></point>
           </series>
        </chart>
     </ba-card>
  </div>
  <div class="col-md-6 ">
  <ba-card cardTitle="appsum.request_count" baCardClass="with-scroll">
     <chart style="display:block;width: 100% !important;" type="StockChart" [options]="options['Request Count']" >
        <series>
           <point (select)="onPointSelect('request_count',$event.context)"></point>
        </series>
     </chart>
  </ba-card>
</div>
<div class="col-md-6 ">
<ba-card cardTitle="appsum.2xx" baCardClass="with-scroll">
   <chart style="display:block;width: 100% !important;" type="StockChart" [options]="options['2xx']" >
      <series>
         <point (select)="onPointSelect('2xx',$event.context)"></point>
      </series>
   </chart>
</ba-card>
</div>
<div class="col-md-6 ">
<ba-card cardTitle="appsum.5xx" baCardClass="with-scroll">
   <chart style="display:block;width: 100% !important;" type="StockChart" [options]="options['5xx']" >
      <series>
         <point (select)="onPointSelect('5xx',$event.context)"></point>
      </series>
   </chart>
</ba-card>
</div>
<div class="col-md-6 ">
<ba-card cardTitle="appsum.database_connection" baCardClass="with-scroll">
   <chart style="display:block;width: 100% !important;" type="StockChart" [options]="options['DB Connections']" >
      <series>
         <point (select)="onPointSelect('database_connection',$event.context)"></point>
      </series>
   </chart>
</ba-card>
</div>
<div class="col-md-6 ">
<ba-card cardTitle="appsum.exceptions" baCardClass="with-scroll">
   <chart style="display:block;width: 100% !important;" type="StockChart" [options]="options['Exception Count']" >
      <series>
         <point (select)="onPointSelect('exceptions',$event.context)"></point>
      </series>
   </chart>
</ba-card>
</div>
  
</div>
`,
})
export class AppsumComponent {
  options: any={};
  mygraphMap: any;
  dataany:any[];
  showChart:boolean=false;
  constructor(private http: Http) {
    this.showChart=false;
    http.get(EndPoints.getEndPoint()+'appsummary/UAT?start=1401889760&end=1502089760').subscribe((res) => {
   // console.log(res);
    this.dataany=res.json();

    for (let entry of res.json()) {
        console.log("setting",entry['metric']); // 1, "string", false
        // mygraphMap = { entry['metric']: {'unit':entry['unit'],series':entry.series,allowPointSelect: true}};
        
        for(let itemeach of entry.series){
          let yoform=[];
          for(let item of itemeach.data ){
              let grab=[];
              grab.push(Number(item.timestamp)*1000);
              grab.push(Number(item.value));
              yoform.push(grab);
          }
          itemeach.data=yoform;
          itemeach['allowPointSelect'] = true;      
               
        }
       // entry.series.data=yoform;
        this.setOptions(entry['metric'], entry.series,entry['unit']);

      }
      console.log("json", res);
      console.log("options", this.options); 
      this.showChart=true;
    });
  }
  onPointSelect(what, selected) {
    console.log('selected re', selected);
    let timestamp=selected.x;
    let appParam = "name=" + selected.series.name;
    let timeParam = "ts=" + selected.category/1000;
    location.href = "#/pages/networkmetrics?"+appParam+"&"+timeParam;
  }
  setOptions(key, series,title) {
    this.options[key] = {
      credits: {
        enabled: false
      },
            
      legend: {
        enabled: true
      },
      rangeSelector: {
        enabled:true,
        inputDateFormat: '%d/%m/%Y',
        inputEditDateFormat: '%d/%m/%Y',
        inputEnabled: true,
        buttonTheme: {
          visibility: 'hidden'
        },
        labelStyle: {
          visibility: 'hidden'
        },
        buttons: []
      },
      exporting: {
        enabled: false
      },
      chart: {
        //height:300,
        // renderTo: 'chart1',
        zoomType: "x",
        reflow: true,
      },
      series: series
    };
   

    console.log("this.options",this.options);
  }

  
}
