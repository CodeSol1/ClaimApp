import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyholdersComponent } from './policyholders.component';

describe('PolicyholdersComponent', () => {
  let component: PolicyholdersComponent;
  let fixture: ComponentFixture<PolicyholdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicyholdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolicyholdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
