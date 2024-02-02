import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterrComponent } from './footerr.component';

describe('FooterrComponent', () => {
  let component: FooterrComponent;
  let fixture: ComponentFixture<FooterrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterrComponent]
    });
    fixture = TestBed.createComponent(FooterrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
