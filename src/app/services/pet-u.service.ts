import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import {throwError as observableThrowError,  Observable } from 'rxjs'; 


@Injectable({
  providedIn: 'root'
})
export class PetUService {

  constructor(private httpclient:HttpClient) { }

getTypePet(){
  var headers = new HttpHeaders();
  headers.set('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ6WUxpYzBHS2VTS2RzV29qY1puMm91VnhtOWN4SkNJd2JwcnFhRHMyUURBWTY1UUlueiIsImp0aSI6ImE5ZWVkNjUyNzdjZmQ3Njk2ZGUxMGE1YTNhYmMyZGM3NzYyMWNlYTQwMDExMmI2N2MxYmZkNmI5NWMwOGIwNWIxZDQ0MzIzNjFkZGQ0MzEzIiwiaWF0IjoxNTk4ODM2MDc1LCJuYmYiOjE1OTg4MzYwNzUsImV4cCI6MTU5ODgzOTY3NSwic3ViIjoiIiwic2NvcGVzIjpbXX0.vNREjVhBqJngnvUzCl4iucsuYmrbCUhoAfRun1FqxGvUNGnH0H6gajNR3VU-9zqhXmosgBE6v1praZe_BLu4eUF4y-qZ0--gUPfYkA_1n4GojcnWiUICIoWI7NmJGkL3dLvglOCAQhMMcra81TO5_KEqQ2GAP6DSjwdYah7xRFBRuY0u2r5jxirQWwzH8M9Q4Crwa02c-dEt1TMz-Sy6wRuBeNSOo0738ezZJ5ENAu0SRev3gEDJWzMU2RmLnXdHwMfYfYmj_dlh78psz6xTl35TU3-NmL1PvWjGIPzvL7qTegR85GFDo_IE8_3HaloWtOS09y0wcxmStje47XatjA');
  headers.set('Content-Type','application/json');
  headers.set('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  headers.set('Access-Control-Allow-Methods', 'GET');
  headers.append('Access-Control-Allow-Origin', '*');


  const options = { headers: headers }
  return this.httpclient.get('https://api.petfinder.com/v2/types', { headers: headers}).pipe(
    tap((data)=> console.log("DATA AQUI +++ "+data)),  catchError(this.handleError)   
  );
}

private handleError(err: HttpErrorResponse) {
  console.log('Error', err);
  return observableThrowError(err.error.message);
}

}
