import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AsistenciaService {
  private apiUrl = 'http://localhost:3000/api/asistencia'; // Cambia esto luego por la URL de Render

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<any[]>(this.apiUrl);
  }

  getByFecha(fecha: string) {
    return this.http.get<any[]>(`${this.apiUrl}/fecha/${fecha}`);
  }

  getByEstudiante(id: number) {
    return this.http.get<any[]>(`${this.apiUrl}/estudiante/${id}`);
  }

  getByFiltro(fecha?: string, estudianteId?: number) {
    let url = `${this.apiUrl}/buscar?`;
    if (fecha) url += `fecha=${fecha}&`;
    if (estudianteId) url += `estudianteId=${estudianteId}`;
    return this.http.get<any[]>(url);
  }
}
