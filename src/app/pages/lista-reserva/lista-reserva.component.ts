import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ReservasService } from '../../servicios'; 
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ReservasInterfaz } from '../../interfaz/ReservasInterfaz';
@Component({
  selector: 'app-lista-reserva',
  templateUrl: './lista-reserva.component.html',
  styleUrl: './lista-reserva.component.css'
})
export class ListaReservaComponent implements OnInit {
  dataSource: MatTableDataSource<ReservasInterfaz> = new MatTableDataSource();
  displayedColumns: string[] = [
    'idReserva',
    'nombreCompleto',
    'correo',
    'fechaEntrada',
    'fechaSalida',
    'tipoHabitacion',
    'peticionesEspeciales',
  ];
  
  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  constructor(
    private reservasService: ReservasService,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.reservasService.getReservas().subscribe(
      (data: any) => {
        console.log('Respuesta de la API:', data); 
        if (Array.isArray(data)) {
          this.dataSource = new MatTableDataSource<ReservasInterfaz>(data);
          this.dataSource.paginator = this.paginator;
        } else {
          console.error('Estructura de datos no válida', data);
        }
      },
      (error) => {
        console.error('Error al obtener reservas', error);
      }
    );
  } 
}

