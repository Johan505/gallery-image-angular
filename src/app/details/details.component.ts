import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Sites from 'src/assets/data.json';

interface TouristSite {
  id: number;
  name: string;
  imageUrl: string;
  desc: string;
}

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  details: TouristSite = {
    id: 0,
    name: '',
    imageUrl: '',
    desc: ''
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.details = Sites.find(site => site.id === id) || this.details;
  }
}
