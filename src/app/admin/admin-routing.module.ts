import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../pages/core/guard/auth.guard';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { AdminComponent } from './admin.component';
import { MovieManagerComponent } from './movie-manager/movie-manager.component';


const routes: Routes = [
  {
    path:'',
    component:AdminComponent,
    canActivate:[AuthGuard],
    children:[
      {
        path:'movie-manager',
        component:MovieManagerComponent,

      },
      {
        path:'add-movie',
        component:AddMovieComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
