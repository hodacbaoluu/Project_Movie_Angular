import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/pages/core/service/auth/auth.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss']
})
export class LoginAdminComponent implements OnInit {

  userLogin: any = {
    taiKhoan: '',
    matKhau: '',
  }
  handleLogin() {
    this.authService.loginApi(this.userLogin).subscribe((data) => {
      if (data.maLoaiNguoiDung == 'QuanTri') {
        localStorage.setItem("userLogin", JSON.stringify(data));//lưu xuống localStorage
        //Lưu data vào AuthService
        this.authService.setCurrentUser(data);
        this.router.navigate(['/admin']);//chuyển trang theo đường dẫn
      }
      else {
        alert('Tài khoản này không phải admin, vui lòng đăng nhập lại');

      }


    })
  }

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

}
