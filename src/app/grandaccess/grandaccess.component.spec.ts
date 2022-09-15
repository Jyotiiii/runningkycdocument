import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandaccessComponent } from './grandaccess.component';

describe('GrandaccessComponent', () => {
  let component: GrandaccessComponent;
  let fixture: ComponentFixture<GrandaccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrandaccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrandaccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
