import { Component } from '@angular/core';
import * as Sites from './data.json';

interface TouristSites {
  id: number;
  name: string;
  username: string;
  email: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sites: TouristSites[] = Sites;
  constructor(){
    console.log('sites', this.sites);
  }
}
