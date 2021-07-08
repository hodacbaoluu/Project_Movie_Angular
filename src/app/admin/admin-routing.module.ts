import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../pages/core/guard/auth.guard';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { AdminComponent } from './admin.component';
import { MovieManagerComponent } from './movie-manager/movie-manager.component';
import { UserManagementComponent } from './user-management/user-management.component';


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
      },
      {
        path:'user-management',
        component: UserManagementComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
