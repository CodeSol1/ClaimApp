import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicydetailsComponent } from './policydetails.component';

describe('PolicydetailsComponent', () => {
  let component: PolicydetailsComponent;
  let fixture: ComponentFixture<PolicydetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicydetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolicydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
