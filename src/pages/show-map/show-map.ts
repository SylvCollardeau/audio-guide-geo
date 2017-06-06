import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the ShowMap page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-show-map',
  templateUrl: 'show-map.html',
})
export class ShowMap {

	private prevlat = 0;
	private prevlng = 0;

	private lat = 0;
	private lng = 0;


  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation) {

  	var watchOptions = {
	    timeout : 3000,
	    enableHighAccuracy: false // may cause errors if true
	};

  	let watch = this.geolocation.watchPosition(watchOptions);

	watch.subscribe((data) => {
		console.log(this.prevlat);
	 	this.lat = data.coords.latitude;
	 	this.lng = data.coords.longitude;

	 	console.log("latitude : " + this.lat + '\n' + "longitude : " + this.lng );

		  var audio = new Audio('assets/music/ACDC-Highway-to-Hell.mp3');

		  if(this.lat == 45.7622942 && this.lng == 3.1089035){
		    if(this.prevlat != this.lat || this.prevlng != this.lng){
		    	if(confirm("Voulez-vous lancer la musique ?")){
		    		audio.play();
		    	}
		    }else{
		    	audio.pause();
		    }
		    this. prevlat = this.lat;
		    this.prevlng = this.lng;
		  }
	});

  }
}
