import { Component,ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DriverregPage } from '../driverreg/driverreg';
import { TouristlgnPage } from '../touristlgn/touristlgn';
import { IntroductionPage } from '../introduction/introduction';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { ToastController } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
user: any = {};
  @ViewChild('username') uname;
  @ViewChild('password') password;
register: string;
  constructor(public navCtrl: NavController , public  http: Http , public toastCtrl: ToastController) {
      this.register = "tourist";
      
  }
  driverReg(){
    this.navCtrl.push(DriverregPage);
    }
    touristsLgn()
    {
      this.navCtrl.push(TouristlgnPage);
    }



    presentToast0()
    {
    let toast = this.toastCtrl.create({
      message: 'already register',
      duration: 3000
    });
    toast.present();
  }

   presentToast1()
  {
    let toast = this.toastCtrl.create({
      message: 'Your are Now SignUp',
      duration: 3000
    });
    toast.present();
  }

   getIn()
    {
        var body = 'name='+this.user.fName +'&LastName='+this.user.lName +'&Phone='+this.user.num +'&Slides='+ 0 +'&Email='+this.user.mail +'&Password='+this.user.password ;
  var headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
//Tourist
  this.http
    .post('http://peaceful-earth-51608.herokuapp.com/Tourist',
      body, {
        headers: headers
      }).map(
    (res: Response) => res.json()
  ).subscribe((res) => {

   this.touristsLgn();

    console.log(res);
    if (res == 'Already registered')
    {
      this.presentToast0();
    }
    else
    {
    this.presentToast1();
    
    
    }
    
  }, error => {
    console.log(JSON.stringify(error.json()));
  });
}
}
