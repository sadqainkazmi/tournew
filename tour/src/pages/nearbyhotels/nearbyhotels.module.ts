import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NearbyhotelsPage } from './nearbyhotels';

@NgModule({
  declarations: [
    NearbyhotelsPage,
  ],
  imports: [
    IonicPageModule.forChild(NearbyhotelsPage),
  ],
})
export class NearbyhotelsPageModule {}
