import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmMascotaComponent } from './abm-mascota.component';

describe('AbmMascotaComponent', () => {
  let component: AbmMascotaComponent;
  let fixture: ComponentFixture<AbmMascotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbmMascotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbmMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
