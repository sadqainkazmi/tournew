import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule, } from '@angular/http';
import { CallNumber } from '@ionic-native/call-number';
import { Geolocation } from '@ionic-native/geolocation';
import { SMS } from '@ionic-native/sms';
import {DomSanitizer} from '@angular/platform-browser';
import { Camera } from '@ionic-native/camera';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DriverregPage } from '../pages/driverreg/driverreg';
import { TouristlgnPage } from '../pages/touristlgn/touristlgn';
import { DriverlgnPage } from '../pages/driverlgn/driverlgn';
import { DriverprofilePage } from '../pages/driverprofile/driverprofile';
import { CreatepackagePage } from '../pages/createpackage/createpackage';
import { IntroductionPage } from '../pages/introduction/introduction';
import { CreatetripPage } from '../pages/createtrip/createtrip';
import { NewtripPage } from '../pages/newtrip/newtrip';
import { DriverdetailsPage } from '../pages/driverdetails/driverdetails';
import { PackagedetailsPage } from '../pages/packagedetails/packagedetails';
import { NearbyhotelsPage } from'../pages/nearbyhotels/nearbyhotels';
import { NearbyhospitalsPage } from'../pages/nearbyhospitals/nearbyhospitals';
import { NearbystoresPage } from'../pages/nearbystores/nearbystores';
import { NearbyresturantsPage } from'../pages/nearbyresturants/nearbyresturants';
import { FormBuilder } from '@angular/forms/src/form_builder';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DriverregPage,
    TouristlgnPage,
    DriverlgnPage,
    DriverprofilePage,
    CreatepackagePage,
    IntroductionPage,
    CreatetripPage,
    NewtripPage,
    DriverdetailsPage,
    PackagedetailsPage,
    NearbyresturantsPage,
    NearbystoresPage,
    NearbyhotelsPage,
    NearbyhospitalsPage
  
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DriverregPage,
    TouristlgnPage,
    DriverlgnPage,
    DriverprofilePage,
    CreatepackagePage,
    IntroductionPage,
    CreatetripPage,
    NewtripPage,
    DriverdetailsPage,
    PackagedetailsPage,
    NearbyresturantsPage,
    NearbystoresPage,
    NearbyhotelsPage,
    NearbyhospitalsPage
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CallNumber,
    Geolocation,
    SMS,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
