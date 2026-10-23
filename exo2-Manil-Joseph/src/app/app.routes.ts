import { Routes } from '@angular/router';
import { Accueil } from './accueil/accueil';
import { Liste } from './liste/liste';
import { Gestion } from './gestion/gestion';
import { Contact } from './contact/contact';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
  { path: '', component: Accueil },
  { path: 'liste', component: Liste },
  { path: 'gestion', component: Gestion },
  { path: 'contact', component: Contact },
  { path: '**', component: NotFound }, // URL inconnue -> accueil
];