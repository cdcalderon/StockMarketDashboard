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
      //console.log(response);
      return <IStockEarning[]> response.json()
    })
               .do(data => console.log('All: ' + JSON.stringify(data)))
               .catch(this.handleError);
  }

  getCalendarEvents() {
    return calendarEvents;
  }


  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server Error');
  }

  //const calendarEvents =
}
let date = new Date();
let d = date.getDate();
let m = date.getMonth();
let y = date.getFullYear();

const calendarEvents = [
  {
    title: 'All Day Event',
    start: new Date(y, m, 1),
    backgroundColor: "red",
    textColor: "#fff",
    description: 'Will be busy throughout the whole day'
  },
  {
    title: 'Long Event',
    start: new Date(y, m, d + 5),
    end: new Date(y, m, d + 7),
    description: 'This conference should be worse visiting'
  },
  {
    id: 999,
    title: 'Blah Blah Car',
    start: new Date(y, m, d - 3, 16, 0),
    allDay: false,
    description: 'Agree with this guy on arrival time'
  },
  {
    id: 1000,
    title: 'Buy this template',
    start: new Date(y, m, d + 3, 12, 0),
    allDay: false,
    backgroundColor: "red",
    textColor: "#fff",
    description: 'Make sure everything is consistent first'
  },
  {
    title: 'Got to school',
    start: new Date(y, m, d + 16, 12, 0),
    end: new Date(y, m, d + 16, 13, 0),
    backgroundColor:  "red",
    textColor: "#fff",
    description: 'Time to go back'
  },
  {
    title: 'Study some Node',
    start: new Date(y, m, d + 18, 12, 0),
    end: new Date(y, m, d + 18, 13, 0),
    backgroundColor: "#024a88",
    textColor: "#fff",
    description: 'Node.js is a platform built ' +
    'on Chrome\'s JavaScript runtime for easily' +
    ' building fast, scalable network applications.' +
    ' Node.js uses an event-driven, non-blocking' +
    ' I/O model that makes it lightweight and' +
    ' efficient, perfect for data-intensive real-time' +
    ' applications that run across distributed devices.'
  },
  {
    title: 'Azimuth link',
    start: new Date(y, m, 28),
    end: new Date(y, m, 29),
    url: 'http://themeseason.com/',
    backgroundColor: "red",
    textColor: "#fff",
    description: 'example'
  }
];