import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemsGoneComponent } from './problems-gone.component';

describe('ProblemsGoneComponent', () => {
  let component: ProblemsGoneComponent;
  let fixture: ComponentFixture<ProblemsGoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemsGoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemsGoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
