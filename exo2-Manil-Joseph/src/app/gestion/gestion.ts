import { Component, inject } from '@angular/core';
import { ContactService } from '../contact-service';
import { NotFound } from '../not-found/not-found';

@Component({
  selector: 'app-gestion',
  imports: [NotFound],
  templateUrl: './gestion.html',
  styleUrl: './gestion.scss',
})
export class Gestion {
  service = inject(ContactService);
}