import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesComponent } from './detalles/detalles.component'; // Asegúrate de importar el componente de detalles
import { GalleryComponent } from './gallery/gallery.component';


const routes: Routes = [
  { path: '', component: GalleryComponent },
  { path: 'detalles/:id', component: DetallesComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
