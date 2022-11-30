import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplypolicyComponent } from './applypolicy.component';

describe('ApplypolicyComponent', () => {
  let component: ApplypolicyComponent;
  let fixture: ComponentFixture<ApplypolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplypolicyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplypolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
