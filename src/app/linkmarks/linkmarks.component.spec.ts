import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkmarksComponent } from './linkmarks.component';

describe('LinkmarksComponent', () => {
  let component: LinkmarksComponent;
  let fixture: ComponentFixture<LinkmarksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkmarksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkmarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
