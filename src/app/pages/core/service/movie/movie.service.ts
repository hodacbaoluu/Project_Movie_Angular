import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class MovieService {


  constructor(private httpClient: HttpClient) { }
  getListMovieApi(maNhom: number) {
    return this.httpClient.get(`https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP0${maNhom}`).pipe(
      tap((data) => {

      }),
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
        `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP10`
      )
      .pipe(
        tap((data) => { }),
        catchError((err) => {
          return err;
        })
      );
  }
  getPagingMovie(soTrang: number): Observable<any> {
    return this.httpClient
      .get<any>(
        `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01`
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
  getPagingUser(soTrang: number): Observable<any> {
    return this.httpClient
      .get<any>(`https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01`
      )
      .pipe(
        tap((data) => {
          console.log(data)
        }),
        catchError((err) => {
          return err
        })
      )
  }
  getListNameMovieAPI(maNhom: string, tenPhim: string): Observable<any> {
    return this.httpClient.get(`https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}&tenPhim=${tenPhim}`).pipe(
      tap((data) => {
      }),
      catchError((err) => {
        console.log(err);
        return err;

      })
    )
  }
}
