import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import { GapService } from './gaps.service';

import * as Highcharts from 'highcharts';

Highcharts.setOptions({
 colors: ['#058DC7', '#50B432', '#ED561B']
});

//import * as Highcharts3d from 'highcharts/highcharts-3d.js';

//Highcharts3d(Highcharts);

@Component({
  selector: 'gaps',
  template: `<chart [options]="options"></chart>
`,
  providers: [GapService]
})

export class GapsComponent {
  
  gaps: any[]

  constructor(private _gapService: GapService) {

this.options = {
      chart: {
        type: 'column',
        margin: 75,
        options3d: {
          enabled: true,
          alpha: 15,
          beta: 15,
          depth: 50
        }
      },
     plotOptions: {
       column: {
         depth: 25
       }
     },
     series: [{
       data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
     }]
   };
    }		   
 options: Object;
  }
