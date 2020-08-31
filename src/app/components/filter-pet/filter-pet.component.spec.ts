import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterPetComponent } from './filter-pet.component';

describe('FilterPetComponent', () => {
  let component: FilterPetComponent;
  let fixture: ComponentFixture<FilterPetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterPetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
