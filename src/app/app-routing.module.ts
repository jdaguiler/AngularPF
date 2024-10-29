import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { HabitacionesComponent } from './pages/habitaciones/habitaciones.component';
import { ServiciosadicionalesComponent } from './pages/serviciosadicionales/serviciosadicionales.component';
import { FotografiasComponent } from './pages/fotografias/fotografias.component';
import { ReservaComponent } from './pages/reserva/reserva.component';
import { ListaReservaComponent } from './pages/lista-reserva/lista-reserva.component';

const routes: Routes = [

  {path: 'inicio',component:InicioComponent},
  {path: 'habitaciones',component:HabitacionesComponent},
  {path: 'serviciosadicionales',component:ServiciosadicionalesComponent},
  {path: 'fotografias',component:FotografiasComponent},
  {path: 'reserva',component:ReservaComponent},
  {path: 'lista-reserva',component:ListaReservaComponent},
  {path: '**',component:InicioComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
