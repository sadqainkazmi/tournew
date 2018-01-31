import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PackagedetailsPage } from './packagedetails';

@NgModule({
  declarations: [
    PackagedetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(PackagedetailsPage),
  ],
})
export class PackagedetailsPageModule {}
