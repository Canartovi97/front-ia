import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AsistenciaService {
  private url = `${environment.apiBase}/asistencia`; // 👈 clave

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<any[]>(this.url);
  }

  getByFecha(fecha: string) {
    return this.http.get<any[]>(`${this.url}/fecha/${fecha}`);
  }

  getByEstudiante(id: number) {
    return this.http.get<any[]>(`${this.url}/estudiante/${id}`);
  }

  getByFiltro(fecha?: string, estudianteId?: number) {
    let params = new HttpParams();
    if (fecha) params = params.set('fecha', fecha);
    if (estudianteId) params = params.set('estudianteId', String(estudianteId));
    return this.http.get<any[]>(`${this.url}/buscar`, { params });
  }
}
