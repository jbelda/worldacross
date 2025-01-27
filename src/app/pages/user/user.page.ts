import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {ApiService} from "../../services/api.service";
import {NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {FilterPipeModule} from "ngx-filter-pipe";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
  imports: [
    IonicModule,
    NgForOf,
    FormsModule,
    FilterPipeModule
  ]
})
export class UserPage implements OnInit {

  constructor(private api:ApiService, private activateRoute : ActivatedRoute, private router       : Router) {
    this.user = [];
  }
  user: any;
  userFilter: any;
  ngOnInit() {
    this.api.getUsers().subscribe( (r: any) => {
      const aux = r;
      for ( let i = 0; i < aux.length; i++ ) {
        if (aux[i].id === this.activateRoute.snapshot.params['id']){
          this.user = aux[i];
        }
      }
    });
  }
  goHome(){
    this.router.navigate(['/']);
  }
}
