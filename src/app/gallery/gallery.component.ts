import { Component } from '@angular/core';
import Sites from '../data.json';
import { HttpClient } from '@angular/common/http';

interface TouristSites {
  name: string;
  imageUrl: string;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})

export class GalleryComponent {

  sites: TouristSites[] = Sites

}
