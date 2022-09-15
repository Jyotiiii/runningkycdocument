import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentaccessComponent } from './documentaccess.component';

describe('DocumentaccessComponent', () => {
  let component: DocumentaccessComponent;
  let fixture: ComponentFixture<DocumentaccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentaccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentaccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
