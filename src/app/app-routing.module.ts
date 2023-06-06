import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DetailsComponent } from './details/details.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [
  { path: '', component: GalleryComponent },
  { path: 'detail/:id', component: DetailsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
