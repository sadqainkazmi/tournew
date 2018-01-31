import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http, Headers, Response,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { ToastController } from 'ionic-angular';
import {DriverprofilePage} from "../driverprofile/driverprofile";
import { LoadingController } from 'ionic-angular';

/**
 * Generated class for the DriverlgnPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-driverlgn',
  templateUrl: 'driverlgn.html',
})
export class DriverlgnPage {
user: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams , public http : Http , public toastCtrl: ToastController,public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DriverlgnPage');
  }

//this.abc = new MyApp();

  presentLoading() {
      let loader = this.loadingCtrl.create({
        content: "you Are Signing Inn",
        duration: 500
      });
      loader.present();
    }
  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Wrong Jeep number OR Passward',
      duration: 3000
    });
    toast.present();
  }
  presentToast1() {
    let toast = this.toastCtrl.create({
      message: 'Welcome',
      duration: 3000
    });
    toast.present();
  }
  profile(){
	this.navCtrl.push(DriverprofilePage);
	}
  login(){
    var body ='Jeep='+this.user.Jeepnum +
      '&Password='+this.user.pass ;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

    this.http
    .post('http://peaceful-earth-51608.herokuapp.com/LoginJeep',
        body, {
          headers: headers
        }).map(
      (res: Response) =>  res.json()

    ).subscribe((res) => {
      console.log(res)
      //ye client side ka kam kiya hai mainay
      if (res == 'Login Failed')
      {
        this.presentToast();

      }else{

      //  abc.initializeApp();
        this.presentLoading();
        this.presentToast1();
        localStorage.setItem('username',res.user[0].Drivername);
        localStorage.setItem('userlicense',res.user[0].License);
        localStorage.setItem('userjeep',res.user[0].Jeep);
        localStorage.setItem('userrefrence',res.user[0].Refrences);
        localStorage.setItem('usercontact',res.user[0].contact);
        localStorage.setItem('userimage',res.user.image);
        this.profile();

      }

      console.log('asasasas', res);
// //       if(res.data.login == 'true'){
// //         // this.navCtrl.push(EventsPage);
// //         //   this.nav.setRoot(EventsPage);
// //         //   this.rootPage = EventsPage;
// //         // localStorage.setItem('id', res.data.userid);
// //         // localStorage.setItem('login', res.data.login);
// //         alert('asdasdsd');
// // // acha ab login wala bhund sahi karwa do abhi mene email match karwai hai ab tum pass word match karwao ek mint
// //       }
//
//       if(res.data.login == 'false'){
//         // this.loginAlert();
//
//
      //}
    }, error => {
      console.log(JSON.stringify(error.json()));
    });

  }


}
