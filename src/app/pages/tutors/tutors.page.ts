import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {ApiService} from "../../services/api.service";
import {NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {FilterPipeModule} from "ngx-filter-pipe";
import {Router, RouterLink} from "@angular/router";
import {home} from "ionicons/icons";

@Component({
  selector: 'app-tutors',
  templateUrl: './tutors.page.html',
  styleUrls: ['./tutors.page.scss'],
  imports: [
    IonicModule,
    NgForOf,
    FormsModule,
    FilterPipeModule,
    RouterLink
  ]
})
export class TutorsPage implements OnInit {

  constructor(private api:ApiService, private router:Router) {
    this.tutors = [];
    this.userFilter = { speciality: '' }
  }
  tutors: any;
  userFilter: any;
  ngOnInit() {
    this.api.getTutors().subscribe( r => this.tutors = r);
  }
  goHome(){
    this.router.navigate(['/']);
  }

  protected readonly home = home;
}
