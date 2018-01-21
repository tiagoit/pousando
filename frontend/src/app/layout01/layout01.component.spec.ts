import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Layout01Component } from './layout01.component';

describe('Layout01Component', () => {
  let component: Layout01Component;
  let fixture: ComponentFixture<Layout01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Layout01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Layout01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
