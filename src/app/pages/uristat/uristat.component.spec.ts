import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UristatComponent } from './uristat.component';

describe('UristatComponent', () => {
  let component: UristatComponent;
  let fixture: ComponentFixture<UristatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UristatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UristatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
