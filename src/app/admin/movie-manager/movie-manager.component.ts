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

  changePage(soTrang: any) {
    this.soTrang = soTrang;
    console.log(this.soTrang);
  }
  constructor(private movieService: MovieService) {}

  movieList: any = [];
  dataMovie: any = Object.values(this.movieList)
  getListMovie() {
    this.movieService.getPaging(this.soTrang).subscribe((data) => {
      
      this.movieList = data;
      console.log(this.movieList.items)
      console.log(this.dataMovie)
    });
  }

  ngOnInit(): void {
    this.getListMovie();
  }
}
