import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/pages/core/service/auth/auth.service';
import { MovieService } from 'src/app/pages/core/service/movie/movie.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss'],
})
export class UserManagementComponent implements OnInit {
  // text!: string;
  // status: any;
  // maNhom: number = 10;
  soTrang: number = 1;
  searchText: string = '';
  keyword: string = '';
  userList: any[] = [];
  infoUser: any = {};
  formUpdateUser?: FormGroup;
  token: any;
  currenUser: any = null;
  user: any = {
    taiKhoan: this.authService.getCurrentUser().taiKhoan,
  };

  capNhat(thamSo: any) {
    let taiKhoan = thamSo.getAttribute('data-taiKhoan');
    let matKhau = thamSo.getAttribute('data-matKhau');
    let hoTen = thamSo.getAttribute('data-hoTen');
    let email = thamSo.getAttribute('data-email');
    let soDT = thamSo.getAttribute('data-soDT');

    this.formUpdateUser?.setValue({
      hoTen: hoTen,
      email: email,
      soDT: soDT,
      taiKhoan: taiKhoan,
      matKhau: matKhau,
      maNhom: 'GP01',
      maLoaiNguoiDung: 'QuanTri',
    });
  }
  handleUpdataUser() {
    console.log(this.formUpdateUser?.value);
    this.authService
      .updateInfoAPI(this.formUpdateUser?.value, this.token)
      .subscribe((data) => {
        // alert('Cập nhật thành công 🤩'); 
        Swal.fire(
          'Good job!',
          'Cập Nhật Thành Công',
          'success',
        )
        // window.location.reload();
      });
  }
  handleDeleteUser(taiKhoan: any) {
    this.authService.deleteUserAdmin(taiKhoan, this.token).subscribe(
      (data) => {
        console.log(data);
      },
    );
  }
  constructor(
    private movieService: MovieService,
    private authService: AuthService,
    private router: Router
  ) {}

  getListUser() {
    this.movieService.getPagingUser().subscribe((data) => {
      //cái này đúng rồi nè, nhưng chỉ cần xài thư viện thôi không cần tới API, làm cách này cũng đúng
      console.log(data);
      this.userList = data;
      // console.log(this.userList.taiKhoan)
    });
  }

  ngOnInit(): void {
    this.getListUser();
    this.authService.inforAPI(this.user).subscribe((data) => {
      this.infoUser = data;
    });

    this.authService.currentUser.subscribe((data) => {
      this.currenUser = data;
      this.token = this.currenUser.accessToken;
    });

    this.formUpdateUser = new FormGroup({
      taiKhoan: new FormControl(null),
      matKhau: new FormControl(null),
      hoTen: new FormControl(null),
      email: new FormControl(null),
      soDT: new FormControl(null),
      maNhom: new FormControl('GP01'),
      maLoaiNguoiDung: new FormControl('KhachHang'),
    });
  }
}
