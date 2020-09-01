import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { throwError as observableThrowError, Observable, Subject } from 'rxjs';
import { TokenService } from './token.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PetUService {
  public types = new Subject<string>();
  public Breeds = new Subject<string>();
  token: any;
  constructor(private httpclient: HttpClient, private gettoken: TokenService) {}

  getTypePet(): void {
    this.gettoken.getToken().subscribe(
      (data) => {
        this.token = data;
        this.getpet(this.token.access_token).subscribe((data2) => {
          this.types.next(data2);
        });
        return this.types.asObservable();
      },
      (error) => console.error(error)
    );
  }

  getpet(token): Observable<any> {
    const headers = new HttpHeaders({
      Accept: 'application/json',
      Authorization: 'Bearer' + ' ' + token,
    });
    return this.httpclient.get(environment.version + environment.UrlForTypes, { headers: headers });
  }

  getRacePet(type): void {
    this.gettoken.getToken().subscribe(
      (data) => {
        this.token = data;
        this.getBreeds(type,this.token.access_token).subscribe((dataBreeds) => {
          console.log(dataBreeds);
          this.Breeds.next(dataBreeds);
        });
        return this.Breeds.asObservable();
      },
      (error) => console.error(error)
    );
  }


  getBreeds(type,token): Observable<any> {
    const headers = new HttpHeaders({
      Accept: 'application/json',
      Authorization: 'Bearer' + ' ' + token,
    });
    return this.httpclient.get(environment.version + environment.UrlForTypes +'/' + type + environment.UrlForBreeds , { headers: headers })
  }


}
