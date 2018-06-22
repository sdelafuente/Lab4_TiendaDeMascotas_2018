import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotasTurnosComponent } from './mascotas-turnos.component';

describe('MascotasTurnosComponent', () => {
  let component: MascotasTurnosComponent;
  let fixture: ComponentFixture<MascotasTurnosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MascotasTurnosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MascotasTurnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
