import { TestBed } from '@angular/core/testing';
import { HttpTestingController } from '@angular/common/http/testing';
import { PetUService } from './pet-u.service';
import { environment } from 'src/environments/environment';

describe('PetUService', () => {
  let service: PetUService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetUService);
  });

});
