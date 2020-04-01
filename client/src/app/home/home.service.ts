import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class HomeService {

  constructor(private _http: Http) { }

  execute() : Observable<any>{
  	let header = new Headers({
  		'Content-Type' : 'multipart/form-data; boundary=----WebKitFormBoundaryKYhvpjDbdUNIAXXk',
  	});
  	let options = new RequestOptions({headers : header})
  	return this._http.post('https://myems-dev.powerschool-ems.com/admin/pluginconsole/importNewPlugin.action', options)
  					.map(res => res.json())
  					.catch(this.HandleError)
  }

  callBatch() : Observable<any>{
    let header = new Headers({
      'Content-Type' : 'text/html'
    });
    let options = new RequestOptions({headers : header})
    return this._http.get('http://localhost:8080/api/powerpack', options)
            .map(res => res.json())
            .catch(this.HandleError)
  }

  private HandleError(error : Response | any) {
    if(error.status === 409){
      return Observable.throw('Duplicate entry');
    } if(error.status === 403) {
      return Observable.throw('Forbidden');
    } if(error.status === 401){
      return Observable.throw('Unauthorized');
    } else{
      return Observable.throw(error || 'Server error');
    }
  }

}
