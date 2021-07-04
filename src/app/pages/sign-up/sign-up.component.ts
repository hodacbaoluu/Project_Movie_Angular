import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  @ViewChild("formDangKy") formDK?:NgForm;
  nguoiDangKy:any=[];
  constructor() { }
  DangKy(value:any){
    this.nguoiDangKy.push(value);
    this.formDK?.reset();


  }
  ngOnInit(): void {
  }

}
