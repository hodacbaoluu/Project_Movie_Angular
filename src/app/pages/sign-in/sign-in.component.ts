import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../core/service/auth/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  userLogin:any={
    taiKhoan:'',
    matKhau:'',
  }
  handleLogin(){
    console.log(this.userLogin);
    this.authService.loginApi(this.userLogin).subscribe((data)=>{
      localStorage.setItem("userLogin",JSON.stringify(data));//lưu xuống localStorage
      //Lưu data vào AuthService
      this.authService.setCurrentUser(data);
      this.router.navigate(['/']);//chuyển trang theo đường dẫn
      console.log(data);

    })
  }

  constructor(private authService:AuthService,private router:Router) { }//tạo đối tượng mới


  ngOnInit(): void {

  }

}
