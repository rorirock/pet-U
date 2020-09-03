import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePetComponent } from './home-pet.component';

describe('HomePetComponent', () => {
  let component: HomePetComponent;
  let fixture: ComponentFixture<HomePetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
