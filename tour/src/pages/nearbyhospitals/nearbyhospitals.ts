import { Component ,ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation ,GeolocationOptions ,Geoposition ,PositionError } from '@ionic-native/geolocation';
declare var google;

/**
 * Generated class for the NearbyhospitalsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nearbyhospitals',
  templateUrl: 'nearbyhospitals.html',
})
export class NearbyhospitalsPage {

  options : GeolocationOptions;
  currentPos : Geoposition;
  places : Array<any>;
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  placeId: any;
  users:any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,  private geolocation : Geolocation) {
      this.users.formatted_phone_number=localStorage.getItem('user');
  }

  addMap(lat,long){

    let latLng = new google.maps.LatLng(lat, long);

    let mapOptions = {
    center: latLng,
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    console.log('this.mapElement', this.mapElement);
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    this.getRestaurants(latLng).then((results : Array<any>)=>{
        this.places = results;
        for(let i = 0 ;i < results.length ; i++)
        {
            this.createMarker(results[i]);
        }
    },(status)=>console.log(status));

    this.addMarker();

}

addMarker(){

    let marker = new google.maps.Marker({
    map: this.map,
    animation: google.maps.Animation.DROP,
    position: this.map.getCenter()
    });

    let content = "<p>This is your current position !</p>";          
    let infoWindow = new google.maps.InfoWindow({
    content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
    infoWindow.open(this.map, marker);
    });

}


  getUserPosition(){
    this.options = {
    enableHighAccuracy : false
    };
    this.geolocation.getCurrentPosition(this.options).then((pos : Geoposition) => {

        this.currentPos = pos;     

        console.log(pos);
        this.addMap(pos.coords.latitude,pos.coords.longitude);

    },(err : PositionError)=>{
        console.log("error : " + err.message);
    ;
    })
}

getRestaurants(latLng)
{
    var service = new google.maps.places.PlacesService(this.map);
    let request = {
        location : latLng,
        radius : 7000,
        types:["health","doctor","dentist","hospital","pharmacy","physiotherapist"]
    };
    return new Promise((resolve,reject)=>{
        service.nearbySearch(request,function(results,status){
            if(status === google.maps.places.PlacesServiceStatus.OK)
            {
                console.log('results', results)
                resolve(results);    
            }else
            {
                reject(status);
            }

        }); 
    });

}

createMarker(place)
{
  
                let infowindow = new google.maps.InfoWindow();
                let service = new google.maps.places.PlacesService(this.map);
                let marker = new google.maps.Marker({
                  map: this.map,
                  animation: google.maps.Animation.DROP,
                  position: place.geometry.location,
                  
                });  
                
        

        service.getDetails({
          placeId: place.place_id
        }, function(place, status) {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            
            google.maps.event.addListener(marker, 'click', function() {
                console.log('this.service',this.service);
              infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + 
                'Address: ' + place.formatted_address + '<br>' +
                'Rating: ' + place.rating + '<br>' +
                'Phone No. : ' + place.formatted_phone_number + '<br>' +
                'Website: ' + place.website + '<br>' + '</div>');
              infowindow.open(this.map, marker);
              localStorage.setItem('user',place.formatted_phone_number);
             
            });
           
          }
          
        });

        
}
ionViewDidEnter(){
    this.getUserPosition()
}

}
