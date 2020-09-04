import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import {throwError as observableThrowError,  Observable } from 'rxjs'; 
import { environment }  from 'src/environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private httpclient:HttpClient) { }

  getToken(){
    const body = {
    "grant_type":environment.grantType,
    "client_id":environment.clientId,
    "client_secret":environment.clientSecret}
   
  return this.httpclient.post(environment.UrlgetToken, body);
  }
}