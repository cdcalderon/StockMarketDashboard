import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {StockQuoteService} from './stock.quote.service';

declare var TradingView: any;

@Component({
    selector: 'stock-quote',
    templateUrl: './stock.quote.component.html',
    providers: [StockQuoteService],
    // styles:[`
    //    [id^="tradingview"] {
    //    /*display: block;*/
    //    /*margin-left: auto !important;*/
    //    /*margin-right: auto !important;*/
    //      /*position:absolute;*/
    //         /*top:20px;*/
    //         /*left:20px;*/
    //    }`]
})
export class StockQuoteComponent {
    TradingViewObj: any;
    errorMessage: string;
    stockQuotes: any;
    url = 'https://d33t3vvu2t2yu5.cloudfront.net/tv.js';
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
        this.TradingViewObj = TradingView;


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

        // new this.TradingViewObj.widget({
        //     "width": 980,
        //     "height": 610,
        //     "symbol": "NASDAQ:AAPL",
        //     "interval": "D",
        //     "timezone": "Etc/UTC",
        //     "theme": "White",
        //     "style": "1",
        //     "locale": "en",
        //     "toolbar_bg": "#f1f3f6",
        //     "enable_publishing": false,
        //     "save_image": false,
        //     "hideideas": true,
        //     "show_popup_button": true,
        //     "popup_width": "1000",
        //     "popup_height": "650"
        // });


        setTimeout(() => {
            this.loadWidgetScript();
            // jQuery( "#widget1" ).append( this.widget1 );
            // jQuery( "#widget2" ).append( this.widget2 );
        }, 3500);


    }

    loadAPI: Promise<any>;

    public buttonClicked() {


        this.loadAPI = new Promise((resolve) => {
            console.log('resolving promise...');
            this.loadScript(this.url);

            setTimeout(() => {
                this.loadAPI = new Promise((resolve) => {
                    console.log('resolving promise...');
                    this.loadScript('api/widgettv.js');
                });
            }, 2500);


        });
    }

    public loadScript(url) {
        console.log('preparing to load...')
        let node = document.createElement('script');
        node.src = url;
        node.type = 'text/javascript';
        node.async = true;
        node.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(node);
    }

    public loadWidgetScript() {

        window.onload = function() {
            var s = document.createElement('script');
            s.type = 'text/javascript';
            var code = `new TradingView.widget({
    "width": 980,
    "height": 610,
    "symbol": "NASDAQ:AAPL",
    "interval": "D",
    "timezone": "Etc/UTC",
    "theme": "White",
    "style": "1",
    "locale": "en",
    "toolbar_bg": "#f1f3f6",
    "enable_publishing": false,
    "allow_symbol_change": true,
    "hideideas": true
});`;
            try {
                console.log('appending body widget');
                s.appendChild(document.createTextNode(code));
               // document.body.appendChild(s);
                document.getElementById('myWidgetContainer').appendChild(s);
            } catch (e) {
                console.log('error');
                s.text = code;
                document.body.appendChild(s);
            }
        };

        //
        //
        // console.log('preparing to load...')
        // let node = document.createElement('script');
        // node.src = url;
        // node.type = 'text/javascript';
        // node.async = true;
        // node.charset = 'utf-8';
        // document.getElementsByTagName('head')[0].appendChild(node);
    }







}