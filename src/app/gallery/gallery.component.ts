import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Sites from '../data.json';

interface TouristSites {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})

export class GalleryComponent {

  sites: TouristSites[] = Sites

  constructor(private router: Router) { }

  irADetalles(id: number) {
    this.router.navigate(['/detalles', id]);
  }

}
