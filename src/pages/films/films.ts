import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-films',
  templateUrl: 'films.html',
})
export class FilmsPage {

  constructor(public navCtrl: NavController) {
  }

 pushPage(){
    this.navCtrl.push('FilmDetails')
  }

}
