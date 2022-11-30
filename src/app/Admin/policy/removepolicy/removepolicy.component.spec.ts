import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovepolicyComponent } from './removepolicy.component';

describe('RemovepolicyComponent', () => {
  let component: RemovepolicyComponent;
  let fixture: ComponentFixture<RemovepolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemovepolicyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemovepolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
