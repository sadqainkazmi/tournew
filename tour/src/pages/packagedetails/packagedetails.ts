import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http, Headers, Response,RequestOptions} from '@angular/http';
import { CallNumber } from '@ionic-native/call-number';
import { SMS } from '@ionic-native/sms';
import 'rxjs/add/operator/map';


/**
 * Generated class for the PackagedetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-packagedetails',
  templateUrl: 'packagedetails.html',
})
export class PackagedetailsPage {
  user : any =[];
  constructor(public navCtrl: NavController,public http : Http,private callNumber: CallNumber, public navParams: NavParams,private sms: SMS) {
    this.Details();
    this.user.phone=localStorage.getItem('userphone');
    this.user.contact=localStorage.getItem('usercontact');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PackagedetailsPage');
  }
  Details(){
    // this.http.get('http://localhost:3000/Driver').success(
    //     (data, status) => console.log(data);
    // );
     var body='';
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
 
    this.http.get('http://peaceful-earth-51608.herokuapp.com/listpackages').map(
      (res: Response) =>  res.json()
 
    ).subscribe((res) => {
      this.user=res;
      console.log(res)
 
    }, error => {
      console.log(JSON.stringify(error.json()));
    })
 
 }
 launchDialer(n:string){
  n = '+' + n;
   this.callNumber.callNumber(n, true)
   .then(() => console.log('Launched dialer!'))
   .catch(() => console.log('Error launching dialer'));
 }
 launchsms(n:string){
  n = '+' + n;
  this.sms.send(n,'Following Person wants to book you for their pakistan tour, contact him/her to confirm your booking!');
  
}
 

}
