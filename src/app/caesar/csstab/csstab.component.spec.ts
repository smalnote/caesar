import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsstabComponent } from './csstab.component';

describe('CsstabComponent', () => {
  let component: CsstabComponent;
  let fixture: ComponentFixture<CsstabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsstabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsstabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
