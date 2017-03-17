import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {StockQuoteService} from './stock.quote.service';

@Component({
    selector: 'stock-quote',
    templateUrl: './stock.quote.component.html',
    providers: [StockQuoteService]
})
export class StockQuoteComponent {
    errorMessage: string;
    stockQuotes: any;
    pageTitle: string = 'Stock Quote';
    widget1: string = `<iframe width="600" noresize="noresize" scrolling="no" 
                               height="500" frameborder="0" 
                               src="https://widgets.tc2000.com/WidgetServer.ashx?id=45520">
                       </iframe>`;

    widget2: string = `<iframe width="600" noresize="noresize" 
                               scrolling="no" height="500" frameborder="0"
                               src="https://widgets.tc2000.com/WidgetServer.ashx?id=45509">                            
                       </iframe>`;

    constructor(private _route: ActivatedRoute,
                private _stockQuoteService: StockQuoteService) {
    }

    ngOnInit(): void {
        this._stockQuoteService.test();
        // this._stockQuoteService.getStockQuotes()
        //     .subscribe(
        //         stockQuotes => {
        //             this.stockQuotes = stockQuotes;
        //         },
        //         error => this.errorMessage = <any>error
        //     );
        let id = this._route.snapshot.params['id'];
        this.pageTitle += `: ${id}`;

        jQuery( "#widget1" ).append( this.widget1 );
        jQuery( "#widget2" ).append( this.widget2 );
    }
}