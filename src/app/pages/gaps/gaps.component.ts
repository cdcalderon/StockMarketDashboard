import { Component, OnInit } from '@angular/core';
import { GapService } from './gaps.service';

@Component({
  selector: 'gaps',
  template: `<h1>Gaps</h1>`,
  providers: [GapService]
})

export class GapsComponent {
  
  gaps: any[]

  constructor(private _gapService: GapService) {

  }

  ngOnInit(): void {
    this.gaps = this._gapService.getGaps();
    console.log(this.gaps);
  }
}