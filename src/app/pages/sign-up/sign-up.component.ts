import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
nguoiDangKy:any=[];
  constructor() { }
  DangKy(value:any){
    this.nguoiDangKy.push(value);
   


  }
  ngOnInit(): void {
  }

}
