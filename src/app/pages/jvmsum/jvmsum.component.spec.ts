import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JvmsumComponent } from './jvmsum.component';

describe('JvmsumComponent', () => {
  let component: JvmsumComponent;
  let fixture: ComponentFixture<JvmsumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JvmsumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JvmsumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
