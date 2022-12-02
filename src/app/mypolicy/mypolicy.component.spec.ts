import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MypolicyComponent } from './mypolicy.component';

describe('MypolicyComponent', () => {
  let component: MypolicyComponent;
  let fixture: ComponentFixture<MypolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MypolicyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MypolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
