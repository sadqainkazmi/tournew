import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CreatepackagePage } from '../createpackage/createpackage';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { HomePage } from '../home/home';
/**
 * Generated class for the DriverprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-driverprofile',
  templateUrl: 'driverprofile.html',

})
export class DriverprofilePage {
  user: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public  http: Http) {
    this.user.Drivername=localStorage.getItem('username');
  this.user.License=localStorage.getItem('userlicense');
  this.user.Jeep=localStorage.getItem('userjeep');
  this.user.Refrences=localStorage.getItem('userrefrence');
  this.user.contact=localStorage.getItem('usercontact');
  this.user.image=localStorage.getItem('userimage');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DriverprofilePage');
  }
  createPckg()
{
  this.navCtrl.push(CreatepackagePage);
}
logout()
  {
    localStorage.clear;
    this.navCtrl.push(HomePage);
  }
}
