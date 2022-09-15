import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessuploaddocumentComponent } from './successuploaddocument.component';

describe('SuccessuploaddocumentComponent', () => {
  let component: SuccessuploaddocumentComponent;
  let fixture: ComponentFixture<SuccessuploaddocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessuploaddocumentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessuploaddocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
