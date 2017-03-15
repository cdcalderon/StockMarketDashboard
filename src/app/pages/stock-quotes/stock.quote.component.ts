import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'stock-quote',
    templateUrl: './stock.quote.component.html'
})
export class StockQuoteComponent {

    pageTitle: string = 'Stock Quote';
    widget1: string = `<iframe width="600" noresize="noresize" 
                               scrolling="no" height="500" frameborder="0" 
                               src="https://widgets.tc2000.com/WidgetServer.ashx?id=44928">                            
                       </iframe>`;

    constructor(private _route: ActivatedRoute) {
    }

    ngOnInit(): void {
        let id = this._route.snapshot.params['id'];
        this.pageTitle += `: ${id}`;

        jQuery( "#widget" ).append( this.widget1 );
    }



}