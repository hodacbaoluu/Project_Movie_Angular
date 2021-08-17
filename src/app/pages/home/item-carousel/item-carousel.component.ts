import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-item-carousel',
  templateUrl: './item-carousel.component.html',
  styleUrls: ['./item-carousel.component.scss']
})
export class ItemCarouselComponent implements OnInit {
  @Input() movie: any;
  @Input() ktraexit: any;
  @Output() trailer = new EventEmitter();
  @Output() exitVideo = new EventEmitter();
  ktra: boolean = false;
  constructor() { }

  phatVideo(trailer: any) {
    if (this.ktra == false) {
      this.ktra = true;
      console.log(this.ktra);
      this.trailer.emit(trailer);
    }

    this.exitVideo.emit(this.ktra)


  }
  ngOnInit(): void {
  }

}
