import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { MusicControls } from '@ionic-native/music-controls';
import { Http, Response } from '@angular/http';
import { Observable, map } from 'rxjs/RX';
import { AudioGeoService } from '../../service/audio-geo-service';
import { HomePage } from '../pages/home/home';




import 'rxjs/Rx';
/**
 * Generated class for the ShowMap page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-audio-geo',
  templateUrl: 'audio-geo.html',
})

export class AudioGeo {
  private homePage: any;
  
  private lat = 0;
  private lng = 0;
  private audio;

  constructor(private audioGeoService : AudioGeoService, private geolocation: Geolocation, public navCtrl: NavController, public navParams: NavParams) {
  	  this.homePage = HomePage;
	  let watchOptions = {
		  timeout : 3000,
	  	  enableHighAccuracy: true // may cause errors if true
	  };

	  let watch = geolocation.watchPosition(watchOptions).subscribe((data) => {

		   this.audioGeoService.verifMusicJsonFile(data.coords.latitude, data.coords.longitude);

	  });
  }
}
