import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home';
declare var google;

/**
 * Generated class for the CreatepackagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-createpackage',
  templateUrl: 'createpackage.html',
})
export class CreatepackagePage {
  Start: any;
  End: any;
  user1: any = {};
  constructor ( public navCtrl: NavController ,public  http: Http,public toastCtrl: ToastController,public loadingCtrl: LoadingController) {

}
  ionViewDidLoad() {
    console.log('ionViewDidLoad PackagesPage');
  }

  presentLoading() {
      let loader = this.loadingCtrl.create({
        content: "Creating Package",
        duration: 3000
      });
      loader.present();
    }
    logout()
  {
    localStorage.clear;
    this.navCtrl.push(HomePage);
  }
  createpackage(){
    var body ='Sources='+this.user1.src +'&Destination='+this.user1.des +'&Fares='+this.user1.far +'&PerHourFares='+this.user1.per +'&Points='+this.user1.points;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

    this.http
      .post('http://peaceful-earth-51608.herokuapp.com/packages',
        body, {
          headers: headers
        }).map(
      (res: Response) => res.json()
    ).subscribe((res) => {
console.log('CP',res);
this.presentLoading();
//alert('package has been created');
if(res){
localStorage.setItem('usersrc',res.user1.Sources);
localStorage.setItem('userdes',res.user1.Destination);
localStorage.setItem('userfar',res.user1.Fares);
localStorage.setItem('userperhour',res.user1.PerHourFares);
localStorage.setItem('userpoits',res.user1.Points);

}

}, error => {
  console.log(JSON.stringify(error.json()));
});

}
calculateAndDisplayRoute() {

  var directionsService = new google.maps.DirectionsService;
      var directionsDisplay = new google.maps.DirectionsRenderer({
        draggable: true,
      });
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 25,
        center: {lat: 30.3753, lng: 69.3451}
      });
      directionsDisplay.setMap(map);

      this.Start=this.user1.src;
      this.End=this.user1.des;

  directionsService.route({
    origin: this.Start, //get the value from local storage
    destination: this.End,
    travelMode: 'DRIVING'
    
  }, function(response, status) {
    if (status === 'OK') {
      directionsDisplay.setDirections(response);
    } else {
      window.alert('Directions request failed due to ' + status);
    
    }
    
  });
}
}
