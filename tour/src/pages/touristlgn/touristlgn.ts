import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import {Http, Headers, Response,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { ToastController } from 'ionic-angular';
import { IntroductionPage } from '../introduction/introduction';
import { CreatetripPage } from '../createtrip/createtrip';
import { HomePage } from '../home/home';

/**
 * Generated class for the TouristlgnPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-touristlgn',
  templateUrl: 'touristlgn.html',
})
export class TouristlgnPage {
  user: any = {};

    //this.abc = new MyApp();
    constructor(public navCtrl: NavController,public  http: Http ,public toastCtrl: ToastController,public loadingCtrl: LoadingController ) {
      this.user.Phone=localStorage.getItem('userphone');
    }


    ionViewDidLoad() {
      console.log('ionViewDidLoad LoginPage');
    }
    presentToast() {
      let toast = this.toastCtrl.create({
    
        message: 'Wrong Email OR Passward',
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
    intro(){
      this.navCtrl.push(IntroductionPage);
    }
    presentLoading() {
        let loader = this.loadingCtrl.create({
          content: "You Are Signing Inn",
          duration: 3000
        });
        loader.present();
      }

    getIn(){
      var body = 'email='+this.user.mail +
        '&Password='+this.user.pass ;
      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  //Login
      this.http
        .post('http://peaceful-earth-51608.herokuapp.com/Login',
          body, {
            headers: headers
          }).map(
        (res: Response) =>  res.json()

      ).subscribe((res) => {

        console.log('asasasas', res);
        if (res == 'Login Failed')
        {
          this.presentToast();
          this.navCtrl.push(HomePage);

        }else{
          this.presentLoading();
          this.presentToast1();
          localStorage.setItem('userphone',res.user.Phone);
          // localStorage.setItem('slide', 0);
if(res.user.Slides == 0)
{
          var body = '_id='+res.user._id;
      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  //Login
      this.http
        .post('http://peaceful-earth-51608.herokuapp.com/Slides',
          body, {
            headers: headers
          }).map(
        (res: Response) =>  res.json()

      ).subscribe((res) => {

        console.log('asasasas', res);
       
    
      }, error => {
        console.log(JSON.stringify(error.json()));
      });
          this.intro();
    }else{
      this.navCtrl.push(CreatetripPage);
    }
        }
    
      }, error => {
        console.log(JSON.stringify(error.json()));
      });
    
  }
}
