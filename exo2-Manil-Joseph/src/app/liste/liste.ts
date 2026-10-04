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
  // les films 
  films: Film[] = [
    { titre: '8 Mile', affiche: 'films/8-mile.jpg' },
    { titre: 'Over the top', affiche: 'films/over-the-top.jpg' },
    { titre: 'The Dark Knight', affiche: 'films/the-dark-knight.jpg' },
    { titre: 'A bronx tale', affiche: 'films/a-bronx-tale.jpg' },
    { titre: 'John Wick 3', affiche: 'films/john-wick-3.jpg' },
  ];

  filmChoisi = signal<Film | null>(null);

  choisir(film: Film) {
    this.filmChoisi.set(film);
  }
}