import { TestBed } from '@angular/core/testing';
import { expect } from 'chai';
import { AppComponent } from './app.component';

describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [AppComponent]}).compileComponents();
  });
  it ('should work', () => {
    let fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance).to.be.instanceof(AppComponent);
  });
});
