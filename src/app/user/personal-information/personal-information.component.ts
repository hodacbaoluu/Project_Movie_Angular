import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/pages/core/service/auth/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit {
  formCapNhat?: FormGroup;
  hide: boolean = true;

  user: any = {
    taiKhoan: this.authService.getCurrentUser().taiKhoan,
  };
  userInfo: any = {};

  capNhat(thamSo: any) {
    let taiKhoan = thamSo.getAttribute('data-taiKhoan');
    let matKhau = thamSo.getAttribute('data-matKhau');
    let hoTen = thamSo.getAttribute('data-hoTen');
    let email = thamSo.getAttribute('data-email');
    let soDT = thamSo.getAttribute('data-soDT');

    this.formCapNhat?.setValue({
      hoTen: hoTen,
      email: email,
      soDT: soDT,
      taiKhoan: taiKhoan,
      matKhau: matKhau,
      maNhom: "GP06",
      maLoaiNguoiDung: "QuanTri",

    })

  }
  handleCapNhat() {
    console.log(this.formCapNhat?.value);
    this.authService.updateInfoAPI(this.formCapNhat?.value, this.token).subscribe((data) => {
      alert('Cập nhật thành công 🤩');

      this.router.navigate(['/user/personal-information']);
    })

  }
  currenUser: any = null;
  token: any;
  constructor(private authService: AuthService, private router: Router) { }

  get taiKhoan() {
    return this.formCapNhat?.get('taiKhoan');
  }
  get matKhau() {
    return this.formCapNhat?.get('matKhau');
  }
  get hoTen() {
    return this.formCapNhat?.get('hoTen');
  }
  get email() {
    return this.formCapNhat?.get('email');
  }
  get soDT() {
    return this.formCapNhat?.get('soDT');
  }

  ngOnInit(): void {
    this.authService.inforAPI(this.user).subscribe((data) => { this.userInfo = data; });


    this.authService.currentUser.subscribe((data) => {
      this.currenUser = data;

      this.token = this.currenUser.accessToken;
    })
    console.log(this.token);



    // this.user=this.authService.getCurrentUser();
    // console.log(this.user);
    this.formCapNhat = new FormGroup({
      taiKhoan: new FormControl(null, Validators.required),
      matKhau: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      soDT: new FormControl(null, Validators.required),
      hoTen: new FormControl(null, Validators.required),
      maNhom: new FormControl(null, Validators.required),
      maLoaiNguoiDung: new FormControl(null, Validators.required),

    })
  }





}

