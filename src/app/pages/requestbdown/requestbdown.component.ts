import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';
import {EndPoints} from '../../common/endpoints';
import { HttpModule, Http } from '@angular/http';
//EndPoints.getEndPoint()
@Component({
  selector: 'requestbdown',
  templateUrl: './requestbdown.component.html',
  styleUrls: ['./requestbdown.component.scss']
})
export class RequestbdownComponent implements OnInit {
  dataRecieved={'exceptions':[] , 'logs':[]};
  objectKeys = Object.keys;
  //http://34.210.155.47:8080/exceptions/UAT/SignIn/host-1?start=1497209100&end=1499209100
  constructor(private http: Http) {
        http.get(EndPoints.getEndPoint()+'exceptions/UAT/SignIn/host-1?start=1497209100&end=1499209100').subscribe((res) => {
   // console.log(res);
   //  this.searchedData=res.json();
     //console.log("json", res);
     this.dataRecieved['exceptions']=res.json();


    });

    http.get(EndPoints.getEndPoint()+'exceptions/UAT/SignIn/host-1?start=1497209100&end=1499209100').subscribe((res) => {
   // console.log(res);
   //  this.searchedData=res.json();
     //console.log("json", res);
     this.dataRecieved['logs']=res.json();


    });    
  }

  ngOnInit() {
  }

}
