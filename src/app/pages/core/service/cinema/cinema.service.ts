import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  constructor(private httpClient: HttpClient) { }
  getInfoCinemaAPI(maHeThongRap: string): Observable<any> {
    return this.httpClient.get(`https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap?maHeThongRap=${maHeThongRap}`).pipe(
      tap((data) => {

      }),
      catchError((err) => {
        console.log(err);
        return err;
      })
      )
    }
    getPlaceCinemaAPI(maHeThongRap:string):Observable<any>{
      return this.httpClient.get(`https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`).pipe(
        tap((data)=>{

        }),
        catchError((err)=>{
          console.log(err);
          return err;

        })
      )
    }
  }
