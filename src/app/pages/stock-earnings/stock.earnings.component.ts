import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { StockEarningsService } from './stock.earnings.service';
import { IStockEarning } from './stockEarning';

@Component({
  selector: 'stock-earnings',
  templateUrl: './stock.earnings.component.html',
  providers: [StockEarningsService],
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./stock.earnings.component.scss']
})
export class StockEarningComponent implements OnInit {
  stockEarnings: IStockEarning[];
  errorMessage: string;

  calendarEvents : any[] = null;
  
  constructor(private _stockEarningsService: StockEarningsService) {}
  
  ngOnInit(): void {
    // this._stockEarningsService.getStockEarnings()
    //     .subscribe(
    //       stockEarnings => {
    //         this.stockEarnings = stockEarnings;
    //
    //         // console.log("This is stockearnings after all");
    //         // console.log(this.stockEarnings);
    //
    //       },
    //       error => this.errorMessage = <any>error
    //     );

    this.calendarEvents = this._stockEarningsService.getCalendarEvents();

    console.log("ngOnInit - StockEarningComponent ");
    console.log(this.calendarEvents);


    //var gaps.this._stockEarningsService.getGaps();
  }

}