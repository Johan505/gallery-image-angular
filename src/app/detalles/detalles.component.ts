// detalles.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Sites from '../data.json';

interface Lugar {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
}

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss']

})
export class DetallesComponent implements OnInit {
  lugarId?: number;
  lugar?: Lugar;

  sites = Sites

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.lugarId = +params['id'];
      this.lugar = this.buscarLugarPorId(this.lugarId);
    });
  }

  buscarLugarPorId(id: number) {
    return this.sites.find(site => site.id === id);
  }
}
