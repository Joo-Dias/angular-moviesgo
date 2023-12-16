import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { RandomMovieComponent } from './pages/random/random-movie/random-movie.component';

const routes: Routes = [
  {path:'', component: HomeComponent, pathMatch: 'full'},
  { path: 'filmeAleatorio', component: RandomMovieComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
