import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosadicionalesComponent } from './serviciosadicionales.component';

describe('ServiciosadicionalesComponent', () => {
  let component: ServiciosadicionalesComponent;
  let fixture: ComponentFixture<ServiciosadicionalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiciosadicionalesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciosadicionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
