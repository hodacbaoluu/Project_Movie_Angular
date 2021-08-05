import { Component, OnInit, QueryList } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MovieResult } from 'src/app/pages/core/models/movie';
import { AuthService } from 'src/app/pages/core/service/auth/auth.service';
import { MovieService } from 'src/app/pages/core/service/movie/movie.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-movie-manager',
  templateUrl: './movie-manager.component.html',
  styleUrls: ['./movie-manager.component.scss'],
})
export class MovieManagerComponent implements OnInit {
  maNhom: number = 1;
  soTrang: number = 1;
  page: number = 1;
  text!: string;
  token: any;
  currentUser: any = null;
  movieList: any[] = [];
  formUpdateMovie?: FormGroup;

  capNhat(thamSo: any) {
    let maPhim = thamSo.getAttribute('data-maPhim');
    let tenPhim = thamSo.getAttribute('data-tenPhim');
    let moTa = thamSo.getAttribute('data-moTa');
    let hinhAnh = thamSo.getAttribute('data-hinhAnh');
    let ngayKhoiChieu = thamSo.getAttribute('data-ngayKhoiChieu');
    let biDanh = thamSo.getAttribute('data-biDanh');
    let trailer = thamSo.getAttribute('data-trailer');
    let danhGia = thamSo.getAttribute('data-danhGia');

    this.formUpdateMovie?.setValue({
      maPhim: maPhim,
      tenPhim: tenPhim,
      moTa: moTa,
      hinhAnh: hinhAnh,
      ngayKhoiChieu: ngayKhoiChieu,
      biDanh: biDanh,
      trailer: trailer,
      danhGia: danhGia,
      maNhom: 'GP06',
    });
  }

  constructor(
    private movieService: MovieService,
    private authService: AuthService,
    private router: Router
  ) { }

  getListMovie() {
    this.movieService.getMovieApi().subscribe((data) => {
      this.movieList = data;
    });
  }
  handleUpdateMovie(value: MovieResult, fileImg: any) {
    console.log(value);
    console.log(fileImg[0]);

    value.hinhAnh = fileImg[0].name;
    this.movieService.UpdateMovieApi(value, this.token).subscribe((data) => {
      if (typeof data === 'object') {
        //thêm Hình ảnh
        var frm = new FormData();
        frm.append('Files', fileImg[0]);
        frm.append('tenphim', value.tenPhim);
        frm.append('manhom', 'GP06');
        this.movieService.addImageMovie(frm).subscribe((data) => {
          if (data == true) {
          }
        });
      }
      Swal.fire('Good job!', 'Cập nhật thành công', 'success');
      setTimeout(() => { window.location.reload() }, 2000)
    });
    // this.movieService.UpdateMovieAdmin(value, this.token).subscribe((data) => {
    //   if (typeof data === 'object') {
    //     var frm = new FormData();
    //     frm.append('File', fileImg[0]);
    //     frm.append('tenphim', value.tenPhim);
    //     frm.append('manhom', 'GP01');
    //     this.movieService
    //       .UpdateImageMovie(frm, this.token)
    //       .subscribe((data) => {
    //         console.log(data);
    //       });
    //   }
    // });
  }

  handleDeleteMovie(maPhim: any) {
    this.movieService.deleteMovieAdmin(maPhim, this.token).subscribe((data) => {
      console.log(data);
      alert('xóa phim thành công');
    });
  }

  ngOnInit(): void {
    this.getListMovie();

    this.authService.currentUser.subscribe((data) => {
      this.currentUser = data;
      this.token = this.currentUser.accessToken;
    });

    this.formUpdateMovie = new FormGroup({
      maPhim: new FormControl(''),
      tenPhim: new FormControl(''),
      moTa: new FormControl(''),
      hinhAnh: new FormControl(''),
      ngayKhoiChieu: new FormControl(''),
      biDanh: new FormControl(''),
      trailer: new FormControl(''),
      danhGia: new FormControl(''),
      maNhom: new FormControl('GP06'),
    });
  }
}
