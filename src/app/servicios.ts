import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReservasInterfaz } from './interfaz/ReservasInterfaz';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {
  baseUrlReservas: string = 'https://apiangular-e7asevgccshgaqdn.northeurope-01.azurewebsites.net/api/ReservasHabitaciones';

  constructor(private http: HttpClient) { }

  // Obtener todas las reservas
  getReservas() {
    return this.http.get<ReservasInterfaz[]>(this.baseUrlReservas); // Asegúrate de que esto coincide con la respuesta
  }

  // Obtener una reserva específica
  getReserva(id: number) {
    return this.http.get<ReservasInterfaz>(`${this.baseUrlReservas}/${id}`);
  }

  // Crear una nueva reserva
  crearReserva(reserva: ReservasInterfaz) {
    return this.http.post<ReservasInterfaz>(this.baseUrlReservas, reserva);
  }

  // Actualizar una reserva existente
  actualizarReserva(id: number, reserva: ReservasInterfaz) {
    return this.http.put<ReservasInterfaz>(`${this.baseUrlReservas}/${id}`, reserva);
  }

  // Eliminar una reserva
  deleteReserva(id: number) {
    return this.http.delete<ReservasInterfaz>(`${this.baseUrlReservas}/${id}`);
  }
}
