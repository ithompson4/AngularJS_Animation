import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebskillsComponent } from './webskills.component';

describe('WebskillsComponent', () => {
  let component: WebskillsComponent;
  let fixture: ComponentFixture<WebskillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebskillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
