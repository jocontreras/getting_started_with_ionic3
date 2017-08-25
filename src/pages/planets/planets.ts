import { ApiProvider } from './../../providers/api/api';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-planets',
  templateUrl: 'planets.html',
})
export class PlanetsPage {
  planets: Observable<any>;

  constructor(public navCtrl: NavController, public apiProvider: ApiProvider) {
    this.planets = this.apiProvider.getPlanets();
  }

  openDetails(planet) {
    this.navCtrl.push('PlanetDetails', {planet: planet});
  }
}
