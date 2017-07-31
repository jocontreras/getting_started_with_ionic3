import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1 = 'FilmsPage';
  tab2 = 'PeoplePage';
  tab3 = 'PlanetsPage';

  constructor() {

  }
}
