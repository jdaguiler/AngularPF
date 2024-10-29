import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservasService } from '../../servicios';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']  
})
export class ReservaComponent {
  reservaForm: FormGroup;

  constructor(
    private services: ReservasService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.reservaForm = this.fb.group({
      nombreCompleto: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]], 
      fechaEntrada: ['', Validators.required],
      fechaSalida: ['', Validators.required],
      tipoHabitacion: ['', Validators.required],
      peticionesEspeciales: [''], 
    });
  }

  onSubmit() {
    if (this.reservaForm.valid) {
      const nuevaReserva = {
        ...this.reservaForm.value,
        createdAt: new Date().toISOString(), 
        state: true 
      };
      this.services.crearReserva(nuevaReserva).subscribe(
        (data: any) => {
          console.log('Reserva creada', data);
          Swal.fire('Éxito', 'Reserva creada con éxito', 'success');
          this.router.navigate(['/lista-reserva']); 
        },
        (error) => {
          console.error('Error al crear la reserva', error);
          if (error.error.errors) {
            const messages = Object.values(error.error.errors).flat();
            Swal.fire('Error', messages.join(', '), 'error');
          } else {
            Swal.fire('Error', 'Ocurrió un error inesperado', 'error');
          }
        }
      );
    } else {
      Swal.fire('Advertencia', 'Por favor completa todos los campos obligatorios', 'warning');
    }
  }
}
