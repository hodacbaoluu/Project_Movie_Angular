import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-block-app',
  templateUrl: './block-app.component.html',
  styleUrls: ['./block-app.component.scss']
})
export class BlockAppComponent implements OnInit {

  


  constructor() { }


  slides = [
    {img: "../../../../assets/img/slide1.jpg"},
    {img: "../../../../assets/img/slide2.jpg"},
    {img: "../../../../assets/img/slide3.jpg"},
    {img: "../../../../assets/img/slide4.jpg"},
    {img: "../../../../assets/img/slide5.jpg"},
    {img: "../../../../assets/img/slide6.jpg"},
    {img: "../../../../assets/img/slide7.jpg"},
    {img: "../../../../assets/img/slide8.jpg"},
    {img: "../../../../assets/img/slide9.jpg"},
    {img: "../../../../assets/img/slide10.jpg"},
    {img: "../../../../assets/img/slide11.jpg"},
    {img: "../../../../assets/img/slide12.jpg"},
    {img: "../../../../assets/img/slide13.jpg"},
    {img: "../../../../assets/img/slide14.jpg"},
    {img: "../../../../assets/img/slide15.jpg"},
    {img: "../../../../assets/img/slide16.jpg"},
    
  ];
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1, "autoplay": true};

  ngOnInit(): void {
  }

}
