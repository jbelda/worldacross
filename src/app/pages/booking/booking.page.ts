import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {ApiService} from "../../services/api.service";
import {NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {FilterPipeModule} from "ngx-filter-pipe";
import {Router} from "@angular/router";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
  imports: [
    IonicModule,
    NgForOf,
    FormsModule,
    FilterPipeModule
  ]
})
export class BookingPage implements OnInit {

  constructor(private api:ApiService, private router:Router) {
    this.bookings = [];
    this.search = '';
    this.userFilter = { $or: [{ id: this.search}, { student: {first_name: this.search} }, { student: {last_name: this.search} } ] };
  }
  bookings: any;
  userFilter: any;
  search: string;
  ngOnInit() {
    this.api.getBooking().subscribe( r => this.bookings = r);
  }
  filter() {
    this.userFilter = { $or: [{ id: this.search}, { student: {first_name: this.search} }, { student: {last_name: this.search} }  ] };
  }
  goHome(){
    this.router.navigate(['/']);
  }
}
