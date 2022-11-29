import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyclaimsComponent } from './myclaims.component';

describe('MyclaimsComponent', () => {
  let component: MyclaimsComponent;
  let fixture: ComponentFixture<MyclaimsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyclaimsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyclaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
