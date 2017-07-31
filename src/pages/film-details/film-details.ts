import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-film-details',
  templateUrl: 'film-details.html',
})
export class FilmDetails {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilmDetails');
  }

}
