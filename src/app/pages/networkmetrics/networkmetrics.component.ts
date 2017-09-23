import { Component, OnInit } from '@angular/core';
import {NetworkmetricsService} from './networkmetrics.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'networkmetrics',
  templateUrl: './networkmetrics.component.html',
  styleUrls: ['./networkmetrics.component.scss']
})
export class NetworkmetricsComponent implements OnInit {
  observableData: Observable<any>;
  data:any;
  sub:any;
  page:any;
  errorMessage: String;
    constructor(private _networkmetricsService:NetworkmetricsService,
      private route: ActivatedRoute,
      private router: Router
    ) {
      this.data={
        "areaLineData":[],
        "areaLineOptions":[]
      }
    }
  
    ngOnInit() {

      this.sub = this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        console.log("params",params);
        this.page = +params['page'] || 0;
      });

      this.observableData = this._networkmetricsService.getAll();
      this.observableData.subscribe(
        res => this.data=res,
        error => this.errorMessage=<any>error
      );
    }
  
    ngOnDestroy() {
      this.sub.unsubscribe();
    }

}
