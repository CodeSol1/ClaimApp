import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserclaimsComponent } from './userclaims.component';

describe('UserclaimsComponent', () => {
  let component: UserclaimsComponent;
  let fixture: ComponentFixture<UserclaimsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserclaimsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserclaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
