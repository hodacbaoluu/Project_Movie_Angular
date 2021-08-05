import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { SignUpGuard } from './core/guard/sign-up.guard';
import { ChiTietRapComponent } from './home/chi-tiet-rap/chi-tiet-rap.component';
import { HomeComponent } from './home/home.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { PagesComponent } from './pages.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'sign-in',
        component: SignInComponent,
      }, {
        path: 'sign-up',
        component: SignUpComponent,
        canDeactivate: [SignUpGuard],
      }, {
        path: 'chi-tiet-rap/:maHeThongRap/:maCumRap',
        component: ChiTietRapComponent,
      },
      {
        path: 'movie-detail/:maPhim',
        component: MovieDetailComponent,
      },
      {
        path: 'booking/:maLichChieu',
        component: BookingComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
