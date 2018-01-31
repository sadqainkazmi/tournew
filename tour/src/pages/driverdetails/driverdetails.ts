import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http, Headers, Response,RequestOptions} from '@angular/http';
import { CallNumber } from '@ionic-native/call-number';
import 'rxjs/add/operator/map';


/**
 * Generated class for the DriverdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-driverdetails',
  templateUrl: 'driverdetails.html',
})
export class DriverdetailsPage {
  user : any =[];
    constructor(public navCtrl: NavController,public http : Http,private callNumber: CallNumber, public navParams: NavParams) {
      this.Details();
      
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DriverdetailsPage');
  }
  Details(){
   // this.http.get('http://localhost:3000/Driver').success(
   //     (data, status) => console.log(data);
   // );
    var body='';
   var headers = new Headers();
   headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

   this.http.get('http://peaceful-earth-51608.herokuapp.com/Driver').map(
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
  console.log('n',n);
  this.callNumber.callNumber(n, true)
  .then(() => console.log('Launched dialer!'))
  .catch(() => console.log('Error launching dialer'));
}
launchDialer1(n:string){
  n = '+' + n;
  this.callNumber.callNumber(n, true)
  .then(() => console.log('Launched dialer!'))
  .catch(() => console.log('Error launching dialer'));
}

}
