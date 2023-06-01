import { Component } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {

  title:String= 'Johan Avendaño';
  subtitle:String = 'Mi viaje por el mundo';

}
