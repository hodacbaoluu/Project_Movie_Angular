import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject(null); //là 1 đối tượng giúp lưu trữ và thay đổi data, cho phép theo dõi sự thay đổi đó
  currentUser = this.currentUserSubject.asObservable();

  getCurrentUser(): any {
    return this.currentUserSubject.value;
  }
  setCurrentUser(value: any) {
    this.currentUserSubject.next(value);
  }

  constructor(private httpClient: HttpClient, private router: Router) {
    const userJson = localStorage.getItem('userLogin');
    if (userJson) {
      this.setCurrentUser(JSON.parse(userJson));
    }
  }
  loginApi(userLogin: any): Observable<any> {
    return this.httpClient
      .post(
        'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
        userLogin
      )
      .pipe(
        tap((data) => {

        }),
        catchError((err) => {
          console.log(err);
          alert('Tài khoản hoặc mật khẩu không đúng');
          return err;
        })
      );
  }
  signUpApi(user: any): Observable<any> {
    return this.httpClient
      .post(
        'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy',
        user
      )
      .pipe(
        tap((data) => {

        }),
        catchError((err) => {
          console.log(err);
          return err;
        })
      );
  }
  inforAPI(taiKhoan: any): Observable<any> {
    return this.httpClient
      .post(
        'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan',
        taiKhoan
      )
      .pipe(
        tap((data) => {

        }),
        catchError((err) => {
          console.log(err);
          return err;
        })
      );
  }
  updateInfoAPI(user: any, accesstoken: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json-patch+json',
      Authorization: `Bearer ${accesstoken}`,
    });
    return this.httpClient
      .put(
        'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung',
        user,
        { headers: headers }
      )
      .pipe(
        tap((data) => {

        }),
        catchError((err) => {
          console.log(err);
          return err;
        })
      );
  }
  addUserAdmin(user: any, accesstoken: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json-patch+json',
      Authorization: `Bearer ${accesstoken}`,
    });
    return this.httpClient
      .post(
        'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung',
        user,
        { headers: headers }
      )
      .pipe(
        tap((data) => {

        }),
        catchError((err) => {
          console.log(err);
          return err;
        })
      );
  }
  deleteUserAdmin(taiKhoan: any, accesstoken: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json-patch+json',
      Authorization: `Bearer ${accesstoken}`,
    });
    return this.httpClient
      .delete<any>(
        `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
        { headers: headers }
      )
      .pipe(
        tap((data) => {

        }),
        catchError((err) => {
          console.log(err);
          if (err.status == 500) {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: "Bạn chưa đăng nhập",
            });
          } else {
            Swal.fire('Good job!', 'Đã Xóa Người Dùng', 'success');
            setTimeout(() => {
              window.location.reload();
            }, 2000);
          }

          return err.status;
        })
      );
  }

  postQuanLyDatVe(taiKhoan: any, accesstoken: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json-patch+json',
      Authorization: `Bearer ${accesstoken}`,
    });
    return this.httpClient
      .post(
        'https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe',
        taiKhoan,
        { headers: headers }
      )
      .pipe(
        tap((data) => {

        }),
        catchError((err) => {
          console.log(err);
          if (err.status == 500) {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: err.error,
            });
          } else {
            Swal.fire('Good job!', 'Đã Đặt Vé Thành Công', 'success');
            this.router.navigate(['/'])
          }
          return err;
        })
      );
  }
}
