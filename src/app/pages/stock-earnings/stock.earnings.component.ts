import { Component, OnInit } from '@angular/core';
import { StockEarningsService } from './stock.earnings.service';
import { IStockEarning } from './stockEarning';

@Component({
  selector: 'stock-earnings',
  templateUrl: './stock.earnings.component.html',
  providers: [StockEarningsService]
})
export class StockEarningComponent implements OnInit {
  stockEarnings: IStockEarning[];
  errorMessage: string;
  
  constructor(private _stockEarningsService: StockEarningsService) {}
  
  ngOnInit(): void {
    this._stockEarningsService.getStockEarnings()
        .subscribe(
          stockEarnings => this.stockEarnings = stockEarnings,
          error => this.errorMessage = <any>error
        )
  }
}