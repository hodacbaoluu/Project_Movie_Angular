import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { MovieResult } from '../../models/movie';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private httpClient: HttpClient) { }
  getListMovieApi(maNhom: number) {
    return this.httpClient
      .get(
        `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP0${maNhom}`
      )
      .pipe(
        tap((data) => { }),
        catchError((err) => {
          console.log(err);
          return err;
        })
      );
  }
  getCarouselMovieApi(maPhim: number) {
    return this.httpClient
      .get(
        `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`
      )
      .pipe(
        tap((data) => { }),
        catchError((err) => {
          console.log(err);
          return err;
        })
      );
  }
  getListUserApi() {
    return this.httpClient
      .get(
        `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP06`
      )
      .pipe(
        tap((data) => { }),
        catchError((err) => {
          return err;
        })
      );
  }
  getMovieApi(): Observable<any> {
    return this.httpClient
      .get<any>(
        `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP06`
      )
      .pipe(
        tap((data) => {
          // console.log(data);
        }),
        catchError((err) => {
          return err;
        })
      );
  }
  getPagingUser(): Observable<any> {
    return this.httpClient
      .get<any>(
        `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP06`
      )
      .pipe(
        tap((data) => {
          console.log(data);
        }),
        catchError((err) => {
          return err;
        })
      );
  }
  getListNameMovieAPI(maNhom: string, tenPhim: string): Observable<any> {
    return this.httpClient
      .get(
        `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}&tenPhim=${tenPhim}`
      )
      .pipe(
        tap((data) => { }),
        catchError((err) => {
          console.log(err);
          return err;
        })
      );
  }
  addMovieApi(movie: MovieResult, accesstoken: any): Observable<MovieResult> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json-patch+json',
      Authorization: `Bearer ${accesstoken}`,
    });
    return this.httpClient
      .post<MovieResult>(
        'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhim',
        movie,
        { headers: headers }
      )
      .pipe(
        tap((data) => {
          console.log(data);
        }),
        catchError((err) => {
          console.log(err);
          return throwError(err);
        })
      );
  }
  addImageMovie(body: any): Observable<any> {
    let url = `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/UploadHinhAnhPhim`;
    return this.httpClient.post(url, body).pipe(
      tap((data: any) => {
        console.log(data);
      })
    );
  }
  UpdateMovieApi(
    movie: MovieResult,
    accesstoken: any
  ): Observable<MovieResult> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json-patch+json',
      Authorization: `Bearer ${accesstoken}`,
    });
    return this.httpClient
      .post<MovieResult>(
        'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhim',
        movie,
        { headers: headers }
      )
      .pipe(
        tap((data) => {
          console.log(data);
        }),
        catchError((err) => {
          console.log(err);
          return throwError(err);
        })
      );
  }
  findUser(keyword: any): Observable<any> {
    return this.httpClient
      .get<any>(
        `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01&tuKhoa=${keyword}`
      )
      .pipe(
        tap((data) => {
          console.log(data);
        }),
        catchError((err) => {
          console.log(err);
          return err;
        })
      );
  }
  deleteMovieAdmin(maPhim: any, accesstoken: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json-patch+json',
      Authorization: `Bearer ${accesstoken}`,
    });
    return this.httpClient
      .delete<any>(
        `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`,
        { headers: headers }
      )
      .pipe(
        tap((data) => {
          console.log(data);
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
            Swal.fire('Good job!', 'Đã Xóa Phim', 'success');
            setTimeout(() => {
              window.location.reload();
            }, 2000);
          }
          return err;
        })
      );
  }
}
