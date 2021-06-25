import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie1',
  templateUrl: './movie1.component.html',
  styleUrls: ['./movie1.component.scss']
})
export class Movie1Component implements OnInit {
@Input() movie:any;
  constructor() { }

  ngOnInit(): void {
  }

}
