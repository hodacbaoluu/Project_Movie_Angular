import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-carousel',
  templateUrl: './item-carousel.component.html',
  styleUrls: ['./item-carousel.component.scss']
})
export class ItemCarouselComponent implements OnInit {
@Input() movie:any;
  constructor() { }

  ngOnInit(): void {
  }

}
