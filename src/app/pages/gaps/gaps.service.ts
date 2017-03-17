import { Injectable } from '@angular/core';

@Injectable()
export class GapService {
  
  getGaps()  {
    return [
    {
      "symbol": "AAPL",
      "distanceValue": 4.0
    },
    {
      "symbol": "AAPL",
      "distanceValue": 7.0
    }
  ];
  }

}

