import { Component, OnInit } from '@angular/core';
import { AsistenciaService } from '../../services/asistencia';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
 selector: 'app-asistencia',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './asistencia.html',
  styleUrls: ['./asistencia.scss']
})
export class Asistencia implements OnInit{
 asistencias: any[] = [];
  fechaFiltro: string = '';
  estudianteId: number | null = null;
  cargando = false;

  constructor(private asistenciaService: AsistenciaService) {}

  ngOnInit(): void {
    this.cargarTodas();
  }

  cargarTodas() {
    this.cargando = true;
    this.asistenciaService.getAll().subscribe({
      next: data => {
        this.asistencias = data;
        this.cargando = false;
      },
      error: err => console.error(err)
    });
  }

  filtrar() {
    this.cargando = true;
    this.asistenciaService.getByFiltro(this.fechaFiltro, this.estudianteId || undefined)
      .subscribe({
        next: data => {
          this.asistencias = data;
          this.cargando = false;
        },
        error: err => console.error(err)
      });
  }

  limpiar() {
    this.fechaFiltro = '';
    this.estudianteId = null;
    this.cargarTodas();
  }
}
