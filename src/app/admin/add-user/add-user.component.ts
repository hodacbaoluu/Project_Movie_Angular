import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/pages/core/service/auth/auth.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  formAddUser?: FormGroup;
  currenUser: any = null;
  token: any;
  // user: any = {
  //   taiKhoan: this.authService.getCurrentUser().taiKhoan,
  // };
  // userInfo: any = {};
  constructor(private authService: AuthService,private router: Router) {}
  handleAddUser() {
    // console.log(this.formAddUser?.value);
    // console.log(this.authService.getCurrentUser().taiKhoan);
    this.authService
      .addUserAdmin(this.formAddUser?.value, this.token)
      .subscribe((data) => {
        // alert('thêm người dùng thành công');
        Swal.fire(
          'Good job!',
          'Bạn đã thêm một người dùng',
          'success'
        )
        this.router.navigate(["/admin/user-management"])
      });
  }
  ngOnInit(): void {
    this.authService.currentUser.subscribe((data) => {
      this.currenUser = data;
      this.token = this.currenUser.accessToken;
    });
    this.formAddUser = new FormGroup({
      taiKhoan: new FormControl(null),
      matKhau: new FormControl(null),
      hoTen: new FormControl(null),
      email: new FormControl(null),
      soDt: new FormControl(null),
      maNhom: new FormControl('GP01'),
      maloaiNguoiDung: new FormControl('QuanTri'),
    });
  }
}
