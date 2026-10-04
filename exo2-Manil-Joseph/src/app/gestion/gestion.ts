import { Component, inject } from '@angular/core';
import { ContactService } from '../contact-service';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.html',
  styleUrl: './gestion.scss',
})
export class Gestion {
  service = inject(ContactService);
}