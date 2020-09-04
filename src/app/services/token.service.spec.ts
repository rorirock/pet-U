import { TestBed } from '@angular/core/testing';
import { HttpTestingController } from '@angular/common/http/testing';
import { TokenService } from './token.service';
import { environment } from 'src/environments/environment';

describe('TokenService', () => {
  let service: TokenService;
  let httpTestingController: HttpTestingController;
  let resultToken: any;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenService);
  });

  afterEach(()=>{
    httpTestingController.verify();
  })

    it('the service return  typetoken and expires_in?  && method is post?', () => {
      const mockToken = {data: 
        {
          "token_type":"Bearer",
          "expires_in":"3600"
      }};  

      service.getToken().subscribe((dataResult) => {
        resultToken = dataResult;
        expect(resultToken.token_type).toEqual('Bearer');
        expect(resultToken.expires_in).toBe('3600');
      });
      
     const req = httpTestingController.expectOne(environment.UrlgetToken);     
     expect(req.request.method).toEqual('POST');
    });
});
