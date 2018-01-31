import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NearbyresturantsPage } from './nearbyresturants';

@NgModule({
  declarations: [
    NearbyresturantsPage,
  ],
  imports: [
    IonicPageModule.forChild(NearbyresturantsPage),
  ],
})
export class NearbyresturantsPageModule {}
