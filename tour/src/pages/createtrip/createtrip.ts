import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewtripPage } from '../newtrip/newtrip';
import { DriverdetailsPage } from '../driverdetails/driverdetails';
import { NearbyhotelsPage } from'../nearbyhotels/nearbyhotels';
import { NearbyhospitalsPage } from'../nearbyhospitals/nearbyhospitals';
import { NearbystoresPage } from'../nearbystores/nearbystores';
import { NearbyresturantsPage } from'../nearbyresturants/nearbyresturants';
import { PackagedetailsPage } from'../packagedetails/packagedetails';
import { HomePage } from '../home/home';
/**
 * Generated class for the CreatetripPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-createtrip',
  templateUrl: 'createtrip.html',
})
export class CreatetripPage {
  slides = [
    {
      image: "assets/naltar-valley.jpg",
    },
    {
      image: "assets/neelum-valley.jpg",
    },
    {
      image: "assets/ayan-valley.jpg",
    },
    {
      image: "assets/ghanche-district.jpg",
    },
    {
      image: "assets/lake-slide.jpg",
    },
    {
      image: "assets/slide.jpg",
    },
    {
      image: "assets/safari.jpg",
    },
    {
      image: "assets/paya.jpg",
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatetripPage');
  }

  createTrip()
  {
    this.navCtrl.push(NewtripPage);
  }
  getDetails()
  {
    this.navCtrl.push(DriverdetailsPage);
  }
  getRes()
  {
    this.navCtrl.push(NearbyresturantsPage);
  }
  getHos()
  {
    this.navCtrl.push(NearbyhospitalsPage);
  }
  getHots()
  {
    this.navCtrl.push(NearbyhotelsPage);
  }
  getStores()
  {
    this.navCtrl.push(NearbystoresPage);
  }
  getPackages()
  {
    this.navCtrl.push(PackagedetailsPage);
  }
  logout()
  {
    localStorage.clear;
    this.navCtrl.push(HomePage);
  }
}
