import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabasematricsComponent } from './databasematrics.component';

describe('DatabasematricsComponent', () => {
  let component: DatabasematricsComponent;
  let fixture: ComponentFixture<DatabasematricsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabasematricsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabasematricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
