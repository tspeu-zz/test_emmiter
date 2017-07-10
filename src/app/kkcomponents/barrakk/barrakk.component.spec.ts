import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarrakkComponent } from './barrakk.component';

describe('BarrakkComponent', () => {
  let component: BarrakkComponent;
  let fixture: ComponentFixture<BarrakkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarrakkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarrakkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
