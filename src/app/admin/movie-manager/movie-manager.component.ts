import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/pages/core/service/movie/movie.service';

@Component({
  selector: 'app-movie-manager',
  templateUrl: './movie-manager.component.html',
  styleUrls: ['./movie-manager.component.scss']
})
export class MovieManagerComponent implements OnInit {

  maNhom: number = 1;
  constructor(private movieService: MovieService) {}

  movieList: any = [];

  getListMovie() {
    this.movieService.getListMovieApi(this.maNhom).subscribe((data) => {
      console.log(data);
      this.movieList = data;
    });
  }

  ngOnInit(): void {
    this.getListMovie();
  }
}
