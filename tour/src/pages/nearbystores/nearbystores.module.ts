import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NearbystoresPage } from './nearbystores';

@NgModule({
  declarations: [
    NearbystoresPage,
  ],
  imports: [
    IonicPageModule.forChild(NearbystoresPage),
  ],
})
export class NearbystoresPageModule {}
