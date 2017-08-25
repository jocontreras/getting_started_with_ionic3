import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlanetDetails } from './planet-details';

@NgModule({
  declarations: [
    PlanetDetails,
  ],
  imports: [
    IonicPageModule.forChild(PlanetDetails),
  ],
  exports: [
    PlanetDetails
  ]
})
export class PlanetDetailsModule {}
