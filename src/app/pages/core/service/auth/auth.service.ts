import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {tap,catchError} from 'rxjs/operators'
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject=new BehaviorSubject(null);//là 1 đối tượng giúp lưu trữ và thay đổi data, cho phép theo dõi sự thay đổi đó
  currentUser=this.currentUserSubject.asObservable();

  getCurrentUser():any{
    return this.currentUserSubject.value;
  }
  setCurrentUser(value:any){
    this.currentUserSubject.next(value);
  }


  constructor(private httpClient:HttpClient ) {
    const userJson=localStorage.getItem('userLogin');
    if(userJson){
      this.setCurrentUser(JSON.parse(userJson));
    }
  }
  loginApi(userLogin:any):Observable<any>{
    return this.httpClient.post('https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',userLogin).pipe(
      tap((data)=>{
        console.log(data);

      }),
      catchError((err)=>{
        console.log(err);
        return err;

      })
    );
  }
  signUpApi(user:any):Observable<any>{
    return this.httpClient.post('https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy',user).pipe(
      tap((data)=>{
        console.log(data);

      }),
      catchError((err)=>{
        console.log(err);
        return err;

      })
    )
  }
}
