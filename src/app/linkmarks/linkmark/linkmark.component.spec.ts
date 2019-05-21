import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkmarkComponent } from './linkmark.component';

describe('LinkmarkComponent', () => {
  let component: LinkmarkComponent;
  let fixture: ComponentFixture<LinkmarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkmarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
