import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestbdownComponent } from './requestbdown.component';

describe('RequestbdownComponent', () => {
  let component: RequestbdownComponent;
  let fixture: ComponentFixture<RequestbdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestbdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestbdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
