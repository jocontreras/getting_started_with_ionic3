import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@IonicPage()
@Component({
  selector: 'page-films',
  templateUrl: 'films.html',
})
export class FilmsPage {
  films: Observable<any>;

  constructor(public navCtrl: NavController, public http: Http) {
    this.films = this.http.get('http://swapi.co/api/films').map(res => res.json());
  }

  openDetails(film) {
    this.navCtrl.push('FilmDetails', {film: film});
  }
}
