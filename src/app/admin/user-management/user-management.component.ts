import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/pages/core/service/movie/movie.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss'],
})
export class UserManagementComponent implements OnInit {
  text!: string;
  maNhom: number = 10;
  soTrang: number = 1;
  page: number = 1;
  constructor(private movieService: MovieService) {}
  userList: any = [];

  getListUser() {
    this.movieService.getPagingUser(this.soTrang).subscribe((data) => {
      console.log(data);
      this.userList = data;
    });
  }

  ngOnInit(): void {
    this.getListUser();
  }
}
