import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {ApiService} from "../../services/api.service";
import {NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {FilterPipeModule} from "ngx-filter-pipe";
import {Router} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
  imports: [
    IonicModule,
    NgForOf,
    FormsModule,
    FilterPipeModule
  ]
})
export class UsersPage implements OnInit {

  constructor(private api:ApiService, private router: Router) {
    this.users = [];
    this.userFilter = { speciality: '' }
  }
  users: any;
  userFilter: any;
  ngOnInit() {
    this.api.getUsers().subscribe( r => this.users = r);
  }
  userDetail(route: string){
    this.router.navigate([route]);
  }
  goHome(){
    this.router.navigate(['/']);
  }
}
