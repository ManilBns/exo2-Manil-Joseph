import { Injectable, signal } from '@angular/core';

export interface ContactData {
  prenom: string;
  nom: string;
  age: number | null;
  email: string;
  commentaire: string;
}

@Injectable({ providedIn: 'root' })
export class ContactService {
  // Dernier formulaire envoyé (null = aucun). Un nouvel envoi écrase l'ancien.
  dernierFormulaire = signal<ContactData | null>(null);
}