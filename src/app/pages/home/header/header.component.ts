import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/service/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  handleLogout() {
    console.log(this.currentUser);
    localStorage.removeItem('userLogin');

  }
  getInfoUser() {
    this.authService.inforAPI(this.user).subscribe((data) => {
      this.currentUser1 = data;
      console.log(data);

    })
  }
  getCurrentUser() {
    this.authService.currentUser.subscribe((data) => {
      this.currentUser = data;
      // console.log(this.currentUser.accessToken);
    })
  }
  constructor(private authService: AuthService) { }
  currentUser: any = null;
  currentUser1: any;
  user: any = {
    taiKhoan: this.authService.getCurrentUser().taiKhoan
  }
  //tương đướng với componentDidMount
  ngOnInit(): void {
    this.getCurrentUser();
    this.getInfoUser();
    //cách 1: chỉ gọi đúng 1 lần duy nhất nếu currentUser trên service thay đổi (không thể cập nhật)
    // this.authService.getCurrentUser();
    //cách 2: khi data trên service thay đổi sẽ chạy lại callback và nhận được data mới



  }

}
