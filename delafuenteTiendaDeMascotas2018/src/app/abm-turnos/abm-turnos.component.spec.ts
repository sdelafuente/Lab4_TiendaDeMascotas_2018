import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmTurnosComponent } from './abm-turnos.component';

describe('AbmTurnosComponent', () => {
  let component: AbmTurnosComponent;
  let fixture: ComponentFixture<AbmTurnosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbmTurnosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbmTurnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
