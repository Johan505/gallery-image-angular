import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Sites from 'src/assets/data.json';

interface TouristSite {
  id: number;
  name: string;
  imageUrl: string;
  desc: string;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  sites: TouristSite[] = Sites;

  constructor(private router: Router) {}

  viewDetails(id: number) {
    this.router.navigate(['detail', id]);
  }  
  
}
