import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { HabitacionesComponent } from './pages/habitaciones/habitaciones.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ServiciosadicionalesComponent } from './pages/serviciosadicionales/serviciosadicionales.component';
import { FotografiasComponent } from './pages/fotografias/fotografias.component';
import { ReservaComponent } from './pages/reserva/reserva.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';  // Importa MatTableModule
import { MatPaginatorModule } from '@angular/material/paginator';  // Importa MatPaginatorModule
import { MatButtonModule } from '@angular/material/button';  // Importa MatButtonModule
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListaReservaComponent } from './pages/lista-reserva/lista-reserva.component';


import { ReactiveFormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HabitacionesComponent,
    NavbarComponent,
    FooterComponent,
    ServiciosadicionalesComponent,
    FotografiasComponent,
    ReservaComponent,
    ListaReservaComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule, 
    MatPaginatorModule,  
    MatButtonModule, 
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
