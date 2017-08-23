import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-films',
  templateUrl: 'films.html',
})
export class FilmsPage {

  constructor(public navCtrl: NavController) {
  }

  openDetails() {
    /*this.navCtrl.push('FilmDetails');*/
    this.navCtrl.push('FilmDetails',{filmId: 2});
  }

 
 goToPlanets(){
    this.navCtrl.parent.select(2);
  }

}
