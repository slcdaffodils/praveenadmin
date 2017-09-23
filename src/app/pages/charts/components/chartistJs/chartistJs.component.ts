import {Component} from '@angular/core';

import {ChartistJsService} from './chartistJs.service';

@Component({
  selector: 'chartist-js',
  templateUrl: './chartistJs.html',
  styleUrls: ['./chartistJs.scss']
})

export class ChartistJs {

  data:any;

  constructor(private _chartistJsService:ChartistJsService) {
  }

  ngOnInit() {
    this.data = this._chartistJsService.getAll();
    console.log(this.data);
  }

  getResponsive(padding, offset) {
    return this._chartistJsService.getResponsive(padding, offset);
  }
}
