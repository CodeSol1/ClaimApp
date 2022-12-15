import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyallclaimsComponent } from './myallclaims.component';

describe('MyallclaimsComponent', () => {
  let component: MyallclaimsComponent;
  let fixture: ComponentFixture<MyallclaimsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyallclaimsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyallclaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
