import { Component } from '@angular/core';
import Sites from 'src/assets/data.json';

interface TouristSites {
  name:string;
  imageUrl:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
}
