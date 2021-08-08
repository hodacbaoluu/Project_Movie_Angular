import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { MovieManagerComponent } from './movie-manager/movie-manager.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { AddUserComponent } from './add-user/add-user.component';
import { HomeModule } from '../pages/home/home.module';

import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { PagesModule } from '../pages/pages.module';
import { LoginAdminComponent } from './login-admin/login-admin.component';

// import { AddUserComponent } from './add-user/add-user.component';


@NgModule({
  declarations: [
    AdminComponent,
    SidebarComponent,
    AddMovieComponent,
    MovieManagerComponent,
    UserManagementComponent,
    AddUserComponent,
    LoginAdminComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule, HomeModule,
    FormsModule, Ng2SearchPipeModule, NgxPaginationModule,
    ReactiveFormsModule, PagesModule


  ],
  exports: [AdminComponent]
})
export class AdminModule { }
