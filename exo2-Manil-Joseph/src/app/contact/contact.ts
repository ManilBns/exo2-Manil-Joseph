import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from '../contact-service';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private service = inject(ContactService);

  emailCache = signal(false);

  // Validation de l'email : requis + doit contenir un @
  private emailValidators = [Validators.required, Validators.pattern('.*@.*')];

  form = this.fb.group({
    prenom: ['', Validators.required],
    nom: ['', Validators.required],
    age: [null as number | null],
    hide: [false],
    email: ['', this.emailValidators],
    commentaire: ['', Validators.required],
  });

  constructor() {
    // Quand la checkbox Hide change
    this.form.controls.hide.valueChanges.subscribe((hide) => {
      const email = this.form.controls.email;
      this.emailCache.set(!!hide);

      if (hide) {
        email.reset('');          // valeur réinitialisée
        email.clearValidators();  // n'est plus requis
      } else {
        email.setValidators(this.emailValidators); // redevient requis
      }
      email.updateValueAndValidity();
    });
  }

  envoyer() {
    if (this.form.invalid) return;

    alert('Le formulaire est valide');

    // On écrase le formulaire précédent
    const v = this.form.getRawValue();
    this.service.dernierFormulaire.set({
      prenom: v.prenom ?? '',
      nom: v.nom ?? '',
      age: v.age,
      email: v.email ?? '',
      commentaire: v.commentaire ?? '',
    });

    this.router.navigate(['/']);
  }
}