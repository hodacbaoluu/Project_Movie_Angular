import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-ghe',
  templateUrl: './list-ghe.component.html',
  styleUrls: ['./list-ghe.component.scss']
})
export class ListGheComponent implements OnInit {
  status:boolean = false;
  @Input() ghe:any;
  @Output() emitStatus = new EventEmitter();
  constructor() { }
  datGhe(){
    if(this.status){
      this.status = false
    }else{
      this.status = true
    }

    this.emitStatus.emit(this.status)
  }
  ngOnInit(): void {
  }

}
