import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CreatetripPage } from '../createtrip/createtrip';
/**
 * Generated class for the IntroductionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-introduction',
  templateUrl: 'introduction.html',
})
export class IntroductionPage {
  slides = [
    {
      title: "Naltar Valley",
      description: "Naltar is famous for its colourful lakes, it is situated at a drive of 2.5 hours from Gilgit. World’s tastiest potatoes are cultivated here. Covered with pine trees, this valley doesn’t seem to be a part of this world. If you really want to experience paradise in this world, you should visit Naltar at least once. This place will make you fall in love with it.",
      image: "assets/naltar-valley.jpg",
    },
    {
      title: "Neelum Valley",
      description: "Opposite to the Keran sector of Indian-held Kashmir. From the Chella Bandi Bridge – just north of Azaad Kashmir’s capital Muzaffarabad – to Tau Butt, a valley stretches out for 240 kilometres; it is known as the Neelum Valley (literally, the Blue Gem Valley). Neelum is one of the most beautiful valleys of Azaad Kashmir.",
      image: "assets/neelum-valley.jpg",
    },
    {
      title: "Ayun and Bamburet Valley",
      description: "Ayun district is a village of Chitral. Located 12 kilometres south of the city at the confluence of the River Bamburet . There are no words to describe the beauty of the mountains surrounding the village. Beyond Ayun valley is Bamburet Valley, it is one of the three Kalash valleys.",
      image: "assets/ayan-valley.jpg",
    },
    {
      title: "Ghanche District, Gilgit-Baltistan",
      description: "Gilgit-Baltistan's Ghanche district stands almost aloof with its beautiful valleys and settlements inhabited by the most hospitable locals and river irrigated lands. The central location in the district is Khaplu, which is a beautiful landscape with high summits, flowing blue waters, waterfalls.",
      image: "assets/ghanche-district.jpg",
    }
    
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  start()
  {
    this.navCtrl.push(CreatetripPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroductionPage');
  }

}
