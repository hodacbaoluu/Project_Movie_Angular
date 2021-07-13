import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/pages/core/service/auth/auth.service';
import VisibilityIcon from '@material-ui/icons/Visibility';
@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit {

 user:any={
  taiKhoan:this.authService.getCurrentUser().taiKhoan, };
userInfo:any={};
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.authService.inforAPI(this.user).subscribe((data)=>this.userInfo=data);
    // this.user=this.authService.getCurrentUser();
    // console.log(this.user);



  }

}
