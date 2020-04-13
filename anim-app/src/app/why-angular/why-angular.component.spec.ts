import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyAngularComponent } from './why-angular.component';

describe('WhyAngularComponent', () => {
  let component: WhyAngularComponent;
  let fixture: ComponentFixture<WhyAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
