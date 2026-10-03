import { Routes } from '@angular/router';
import { Accueil } from './accueil/accueil';
import { Liste } from './liste/liste';
import { Gestion } from './gestion/gestion';
import { Contact } from './contact/contact';

export const routes: Routes = [
  { path: '', component: Accueil },
  { path: 'liste', component: Liste },
  { path: 'gestion', component: Gestion },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' }, // URL inconnue -> accueil
];