import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

declare var google;
/**
 * Generated class for the NewtripPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newtrip',
  templateUrl: 'newtrip.html',
})
export class NewtripPage {
  
  Start: any;
  End: any;
  user:any={
  
    month: '2017-01-01',
    timeEnds: '2017-01-20'
  };
  user1: any = {};
  constructor ( public navCtrl: NavController ,public  http: Http,public toastCtrl: ToastController,public loadingCtrl: LoadingController) {
     this.user1.Start=localStorage.getItem('s');
     this.user1.End=localStorage.getItem('e');
  }
  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Saving Your Trip With Reminder",
      duration: 3000
    });
    loader.present();
  }
  Alram(){

    var body ='tripname='+this.user.tripname +'&tripsource='+this.user.Start + '&tripdestination='+this.user.End + '&tripstartdate='+this
      .user.month + '&tripenddate='+this.user.timeEnds ;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
//trip
    this.http
      .post('http://peaceful-earth-51608.herokuapp.com/trip',
        body, {
          headers: headers
        }).map(
      (res: Response) => res.json()
    ).subscribe((res) => {


      console.log(res);
this.presentLoading();
if(res)
{
  localStorage.setItem('s',this.user.Start);
        localStorage.setItem('e',this.user.End);
}


    }, error => {
      console.log(JSON.stringify(error.json()));
    }
    );
  }
 
  calculateAndDisplayRoute() {

    var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer({
          draggable: true,
        });
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: {lat: 30.3753, lng: 69.3451}
        });
        directionsDisplay.setMap(map);

      this.Start=this.user.Start;
      this.End=this.user.End;
      

    directionsService.route({
      origin: this.Start, //get the value from local storage
      destination: this.End,
      travelMode: 'DRIVING',
      waypoints:[{location:'murree,pk'},{location:'shogran,pk'},{location:'naran,pk'},{location:'kaghan,pk'}]
    }, function(response, status) {
      if (status === 'OK') {
        directionsDisplay.setDirections(response);
        
      } else {
        window.alert('Directions request failed due to ' + status);
      
      }
      
    });
  }
  ionViewDidLoad() {

    console.log('ionViewDidLoad NewtripPage');
  }


}
