import { Component, signal } from '@angular/core';

interface Film {
  titre: string;
  affiche: string;
}

@Component({
  selector: 'app-liste',
  templateUrl: './liste.html',
  styleUrl: './liste.scss',
})
export class Liste {
  // Remplace par tes 5 films et tes images
  films: Film[] = [
    { titre: 'Inception', affiche: 'films/inception.jpg' },
    { titre: 'Interstellar', affiche: 'films/interstellar.jpg' },
    { titre: 'The Dark Knight', affiche: 'films/dark-knight.jpg' },
    { titre: 'Fight Club', affiche: 'films/fight-club.jpg' },
    { titre: 'Gladiator', affiche: 'films/gladiator.jpg' },
  ];

  filmChoisi = signal<Film | null>(null);

  choisir(film: Film) {
    this.filmChoisi.set(film);
  }
}