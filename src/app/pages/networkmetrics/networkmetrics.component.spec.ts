import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkmetricsComponent } from './networkmetrics.component';

describe('NetworkmetricsComponent', () => {
  let component: NetworkmetricsComponent;
  let fixture: ComponentFixture<NetworkmetricsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetworkmetricsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkmetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
