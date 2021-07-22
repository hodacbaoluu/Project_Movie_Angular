import { Component, OnInit, QueryList } from '@angular/core';
import { MovieService } from 'src/app/pages/core/service/movie/movie.service';

@Component({
  selector: 'app-movie-manager',
  templateUrl: './movie-manager.component.html',
  styleUrls: ['./movie-manager.component.scss'],
})
export class MovieManagerComponent implements OnInit {
  maNhom: number = 1;
  soTrang: number = 1;
  page: number = 1;
  text!:string;

  constructor(private movieService: MovieService) {}

  movieList: any = [];
  getListMovie() {
    this.movieService.getPagingMovie(this.soTrang).subscribe((data) => {
      this.movieList = data;
    });
  }

  ngOnInit(): void {
    this.getListMovie();
  }
}
