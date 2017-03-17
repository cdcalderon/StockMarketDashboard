import { Injectable} from '@angular/core'
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class StockQuoteService {
    private _stockQuotesUrl = './aapl-c.json';

    constructor(private _http: Http) { }

    getStockQuotes(): Observable<any> {
        this.test();
        return this._http.get(this._stockQuotesUrl)

            .map((response: Response) =>  {
                console.log(response);
                return response.json()
            })
            .do(data => console.log('quotes: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }


    test() {
        this._http.get('api/quotes/aapl-c.json').subscribe(
            (aaplc: any) => {
               let t = "";
            }
        );
    }



    // public getJSON(): Observable<any> {
    //     return this.http.get("./file.json")
    //         .map((res:any) => res.json())
    //         .catch((error:any) => console.log(error));
    //
    // }s

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server Error');
    }
}
