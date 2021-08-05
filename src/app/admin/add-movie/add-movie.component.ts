import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MovieResult } from 'src/app/pages/core/models/movie';
import { AuthService } from 'src/app/pages/core/service/auth/auth.service';
import { MovieService } from 'src/app/pages/core/service/movie/movie.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss'],
})
export class AddMovieComponent implements OnInit {
  constructor(
    private movieService: MovieService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.authService.currentUser.subscribe((data) => {
      this.currenUser = data;
      this.token = this.currenUser.accessToken;
    });
    // this.formThemPhim();
    this.formAddMovie = new FormGroup({
      maPhim: new FormControl(''),
      tenPhim: new FormControl(''),
      biDanh: new FormControl(''),
      trailer: new FormControl(''),
      // hinhAnh: new FormControl(''),
      moTa: new FormControl(''),
      maNhom: new FormControl('GP06'),
      ngayKhoiChieu: new FormControl(''),
      danhGia: new FormControl(''),
    });

  }

  formAddMovie?: FormGroup;

  token: any;

  currenUser: any = null;

  // ----------------------------------------------------------------------------------------------------------

  handleAddMovie(value: MovieResult, fileImg: any) {
    console.log(value);
    console.log(fileImg[0]);

    value.hinhAnh = fileImg[0].name;
    this.movieService.addMovieApi(value, this.token).subscribe((data) => {
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
      Swal.fire('Good job!', 'Đã Thêm Phim', 'success');
      this.router.navigate(['/admin/movie-manager']);
    });
  }
}
