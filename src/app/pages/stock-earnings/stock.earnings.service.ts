import { Injectable} from '@angular/core'
import { Http, Response, Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable'; 
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { IStockEarning } from './stockEarning';

@Injectable()
export class StockEarningsService {
  private _stockEarningsUrl = 'https://gentle-everglades-23329.herokuapp.com/earnings';
  //private _stockEarningsUrl = 'http://localhost:4000/earnings?callback=JSONP_CALLBACK';
  //private _stockEarningsUrl = 'http://localhost:4000/earnings';
  constructor(private _http: Http) { }

  getStockEarnings(): Observable<IStockEarning[]> {
    return this._http.get(this._stockEarningsUrl)
               .map((response: Response) =>  {
      console.log(response);
      return <IStockEarning[]> response.json()
    })
               .do(data => console.log('All: ' + JSON.stringify(data)))
               .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server Error');
  }
}