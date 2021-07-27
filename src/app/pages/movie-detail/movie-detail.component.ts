import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../core/service/movie/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {


  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute, private sanitized: DomSanitizer) { }
  maPhim: any;
  infoMovie: any;
  getMaPhim() {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params);
      this.maPhim = params.maPhim;

    })
  }
  getInfoMovieAPI() {
    this.movieService.getCarouselMovieApi(this.maPhim).subscribe((data) => {
      this.infoMovie = data;
      console.log(data);

    })
  }
  trailer(oldURL: string): SafeResourceUrl {
    if (oldURL) {
      oldURL = oldURL.replace("watch?v=", "embed/");
    }
    return this.sanitized.bypassSecurityTrustResourceUrl(oldURL);
  }
  ngOnInit(): void {
    this.getMaPhim();
    this.getInfoMovieAPI();

  }

}

