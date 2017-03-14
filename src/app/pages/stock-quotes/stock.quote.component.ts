import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'stock-quote',
    templateUrl: './stock.quote.component.html'
})
export class StockQuoteComponent {

    pageTitle: string = 'Stock Quote';

    constructor(private _route: ActivatedRoute,
                private _router: Router) {
    }

    ngOnInit(): void {
        let id = this._route.snapshot.params['id'];
        this.pageTitle += `: ${id}`;


        setTimeout(() => {
            jQuery('#wordenChart').attr("src","ChartImageHandler.ashx?service=TCTEMPLATEWIDGET&sym=AMZN&TF=1DAY&w=600&h=299&bars=29&widgetID=44919&ID=4790593&nocache=Tue Mar 14 2017 00:04:49 GMT-0500 (CDT)");
        jQuery('h2').text("nannnd");
        }, 14000);

    }



}