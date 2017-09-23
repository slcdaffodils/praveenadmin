import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostsumComponent } from './hostsum.component';

describe('HostsumComponent', () => {
  let component: HostsumComponent;
  let fixture: ComponentFixture<HostsumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostsumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostsumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
