import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { PagesModule } from './pages/pages.module';
import { SignInComponent } from './pages/sign-in/sign-in.component';


const routes: Routes = [
  // {
  //   path:'sign-in',
  //   component:SignInComponent,
  // },
  {
    path:'',
    loadChildren:()=>PagesModule,
  },{
    path:'admin',
    loadChildren:()=>AdminModule,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
