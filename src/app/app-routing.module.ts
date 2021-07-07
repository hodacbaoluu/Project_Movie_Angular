import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AdminModule } from './admin/admin.module';
// import { PagesModule } from './pages/pages.module';



const routes: Routes = [
  // {
  //   path:'sign-in',
  //   component:SignInComponent,
  // },
  {
    path:'admin',
    loadChildren:()=>import('./admin/admin.module').then((m)=>m.AdminModule),
  },
 {
    path:'',
    loadChildren:()=>import('./pages/pages.module').then((m)=>m.PagesModule),
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
