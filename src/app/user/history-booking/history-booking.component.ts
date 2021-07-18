import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/pages/core/service/auth/auth.service';

@Component({
  selector: 'app-history-booking',
  templateUrl: './history-booking.component.html',
  styleUrls: ['./history-booking.component.scss']
})
export class HistoryBookingComponent implements OnInit {

  constructor(private authService:AuthService) { }
  user: any = {
    taiKhoan: this.authService.getCurrentUser().taiKhoan,
  };
  listBooking:any=[];
  thongTin:any;
  getListBooking(){
    this.authService.inforAPI(this.user).subscribe((data)=>{

      this.listBooking=data.thongTinDatVe;
      this.thongTin=data;
    })
  }
  ngOnInit(): void {
    this.getListBooking();
}
}
