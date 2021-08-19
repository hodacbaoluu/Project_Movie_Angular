import { Component, OnInit } from '@angular/core';
import { MovieService } from '../core/service/movie/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private movieService: MovieService) { }
  loading: boolean = true;
  listMaPhim: any[] = [1329, 3394, 4428, 4332, 1374];
  list: any[] = [];
  movieCarousel: any = [];
  getCarouselMovie() {
    for (const maPhim of this.listMaPhim) {
      this.movieService.getCarouselMovieApi(maPhim).subscribe((data) => {
        this.list.push(data);
      })
    }
    this.movieCarousel = this.list;
  }
  ngOnInit(): void {
    this.getCarouselMovie();
    setTimeout(() => {
      this.loading = false;
    }, 1000)
  }

}
