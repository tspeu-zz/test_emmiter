import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuestraComponent } from './muestra.component';

describe('MuestraComponent', () => {
  let component: MuestraComponent;
  let fixture: ComponentFixture<MuestraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuestraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuestraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
