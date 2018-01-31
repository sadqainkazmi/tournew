import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { DriverlgnPage } from '../driverlgn/driverlgn';
import { DriverprofilePage } from '../driverprofile/driverprofile';
import {Http, Headers, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { ToastController } from 'ionic-angular';
import {ActionSheetController } from 'ionic-angular';
import {DomSanitizer} from '@angular/platform-browser';
import { Camera } from '@ionic-native/camera';
import { FormsModule, FormBuilder, FormGroup, Validators  } from '@angular/Forms';
/**
 * Generated class for the DriverregPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-driverreg',
  templateUrl: 'driverreg.html',
})
export class DriverregPage {
  fNum:any=[];
register: string;
 user: any = {};
 cameraData: string;
  photoTaken: boolean;
  cameraUrl: string;
  photoSelected: boolean;
  
 

  constructor(public navCtrl: NavController,private camera: Camera,private _DomSanitizationService:DomSanitizer,public actionSheetCtrl: ActionSheetController, public navParams: NavParams,public  http: Http,public toastCtrl: ToastController ) {
    this.register= "driver";
    this.photoTaken=false;

  
  }


touristReg()
{
  this.navCtrl.push(HomePage);
}
driverLgn()
{
  this.navCtrl.push(DriverlgnPage);
}
driverProfile()
{
  this.navCtrl.push(DriverprofilePage);
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad DriverregPage');
  }
  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'already register',
      duration: 3000
    });
    toast.present();
  }
  presentToast1() {
    let toast = this.toastCtrl.create({
      message: 'You Are Sign Up as Driver',
      duration: 3000
    });
    toast.present();
  }
  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Image Source',
      buttons: [
        {
          text: 'Load from Gallery',
          handler: () => {
            this.selectFromGallery();
            
          }
        },{
          text: 'Use Camera',
          handler: () => {
            this.openCamera();
            
          }
        },{
          text: 'Cancel',
          role: 'cancel'
        }
      
      ]
    });
    actionSheet.present();
  }
  selectFromGallery() {
    var options = {
      quality: 75,
      allowEdit: true,
      encodingType:this.camera.EncodingType.JPEG,
      targetWidth: 300,
      targetHeight: 300,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.FILE_URI
    };
    this.camera.getPicture(options).then((imageData) => {
      console.log("imagedata",imageData);
      this.cameraData = imageData;
      this.photoSelected = true;
      this.photoTaken = false;
    }, (err) => {
      // Handle error
    });
  }

  openCamera() {
    var options = {
      quality: 75,
      allowEdit: true,
      encodingType:this.camera.EncodingType.JPEG,
      targetWidth: 300,
      targetHeight: 300,
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.DATA_URL
    };
   this. camera.getPicture(options).then((imageData) => {
    console.log("imagedata",imageData);
      this.cameraData = 'data:image/jpeg;base64,' + imageData;
      this.photoTaken = true;
      this.photoSelected = false;
    }, (err) => {
      // Handle error
    });
  }

  
  start(){

    
   console.log("jhvjkvbhv",this.user.cameraData); 
    var body ='Drivername='+this.user.fName +'&LastName='+this.user.lName + '&License='+this.user.linum + '&Jeep='+this
      .user.jeepnum +'&image='+this.cameraData + '&contact='+this.user.contact +'&Refrences='+this.user.fNum + '&Password='+this.user.password ;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  //JeepReg
    this.http
      .post('http://peaceful-earth-51608.herokuapp.com/JeepReg',
        body, {
          headers: headers
        }).map(
      (res: Response) => res.json()
    ).subscribe((res) => {
      

this.driverLgn();
      console.log(res);
        if (res == 'Already registered')
        {
          this.presentToast();



        }else{
          this.presentToast1();

        }

      // if(res.data.login == 'true'){
      //   // this.navCtrl.push(EventsPage);
      //   //   this.nav.setRoot(EventsPage);
      //   //   this.rootPage = EventsPage;
      //   localStorage.setItem('id', res.data.userid);
      //   localStorage.setItem('login', res.data.login);
      //
      // }
      // if(res.data.login == 'false'){
      //   // this.loginAlert();
      //
      //
      // }
    }, error => {
      console.log(JSON.stringify(error.json()));


    }

    );


  }

}
