import { Routes } from '@angular/router';
import { Asistencia } from './components/asistencia/asistencia';


export const routes: Routes = [
  { path: '', component: Asistencia },
  { path: 'asistencia', component: Asistencia }
];
