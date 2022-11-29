import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PloicylistComponent } from './ploicylist.component';

describe('PloicylistComponent', () => {
  let component: PloicylistComponent;
  let fixture: ComponentFixture<PloicylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PloicylistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PloicylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
