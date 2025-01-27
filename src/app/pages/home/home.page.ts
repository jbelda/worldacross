import { Component, OnInit } from '@angular/core';
import { IonicModule} from "@ionic/angular";
//import { IonAccordion, IonAccordionGroup } from '@ionic/angular/standalone';
import {TutorsPage} from "../tutors/tutors.page";
import {UsersPage} from "../users/users.page";
import {BookingPage} from "../booking/booking.page";
import {Router} from "@angular/router";


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [
    IonicModule,
    TutorsPage,
    UsersPage,
    BookingPage
  ]
})
export class HomePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goUsers(){
    this.router.navigate(['/users']);
  }
  goBooking(){
    this.router.navigate(['/booking']);
  }
  goTutors(){
    this.router.navigate(['/tutors']);
  }
}
