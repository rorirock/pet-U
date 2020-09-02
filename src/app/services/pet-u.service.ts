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
  public breeds = new Subject<any>();
  public tags = new Subject<any>();
  public info = new  Subject<any>();
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

  getRacePet(type): any {
    return this.gettoken.getToken().subscribe(
      (data) => {
        this.token = data;
        this.getBreeds(type,this.token.access_token).subscribe((dataBreeds) => {
          this.breeds.next(dataBreeds);
        });
        return this.breeds.asObservable();
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

  getTagPet(type,breed): any {
    return this.gettoken.getToken().subscribe(
      (data) => {
        this.token = data;
        this.getTags(type,breed,this.token.access_token).subscribe((dataTags) => {
          this.tags.next(dataTags);
        });
        return this.tags.asObservable();
      },
      (error) => console.error(error)
    );
  }

  getTags(type,breed,token): Observable<any> {
    const headers = new HttpHeaders({
      Accept: 'application/json',
      Authorization: 'Bearer' + ' ' + token,
    });
    return this.httpclient.get(environment.version + environment.ulrFortags +'?type=' + type + '&breed='+ breed , { headers: headers })
  }

  getInfoPet(id){
    this.gettoken.getToken().subscribe(
      (data) => {
        this.token = data;
        this.getInfo(id,this.token.access_token).subscribe((dataInfo) => {
          this.info.next(dataInfo);
        });
        return this.info.asObservable();
      },
      (error) => console.error(error)
    );
  }

  getInfo(id,token){
    const headers = new HttpHeaders({
      Accept: 'application/json',
      Authorization: 'Bearer' + ' ' + token,
    });
    return this.httpclient.get(environment.version + environment.ulrFortags + '/'+id, { headers: headers })
  }


}
