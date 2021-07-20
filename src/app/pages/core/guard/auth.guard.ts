import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //   let userLogin;
    //   if(localStorage.getItem('userLogin')){
    //     userLogin=JSON.parse(localStorage.getItem('userLogin')!);// ! là không quan tâm tới dữ liệu ban đầu
    //     if(userLogin.maLoaiNguoiDung==="QuanTri"){
    //       return true;
    //     }
    //   }
    const currentUser=this.authService.getCurrentUser();
    if(currentUser && currentUser.maLoaiNguoiDung==="QuanTri"){
      return true;
    }
     this.router.navigate(['/']);
     return false;

  }
  constructor(private router:Router, private authService:AuthService){
  }
}
