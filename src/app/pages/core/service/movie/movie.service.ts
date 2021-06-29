import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {tap,catchError} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient:HttpClient) { }
  getListMovieApi(maNhom:number){
    return this.httpClient.get(`https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP0${maNhom}`).pipe(
      tap((data)=>{
        console.log(maNhom);

      }),
      catchError((err)=>{
        console.log(err);
        return err;

      })
    );
  }
  getCarouselMovieApi(maPhim:number){
    return this.httpClient.get(`https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`).pipe(
      tap((data)=>{


      }),
      catchError((err)=>{
        console.log(err);
        return err;

      })
    )
  }
}
