import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArraymodelComponent } from './arraymodel.component';

describe('ArraymodelComponent', () => {
  let component: ArraymodelComponent;
  let fixture: ComponentFixture<ArraymodelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArraymodelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArraymodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
