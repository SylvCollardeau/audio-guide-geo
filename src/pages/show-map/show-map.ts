import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Connexion } from '../connexion/connexion';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {

 	var prevlat = "";
	var prevlng = "";

  	var onLocationSuccess = function(position) {
  		
	    var lat = position.coords.latitude;
	    var lng = position.coords.longitude;

	    console.log("latitude : " + lat + '\n' + "longitude : " + lng );
	    var audio = new Audio('assets/music/ACDC-Highway-to-Hell.mp3');
	    if(lat == "45.7623301" && lng == "3.1089477"){
	    	if(prevlat != lat || prevlng != lng){
	    		
	    		audio.play();
	    	}
	    }else{
	    	audio.pause();
			audio.currentTime = 0;
	    }  
	    prevlat = lat;
  		prevlng = lng;
  	};



	// onError Callback receives a PositionError object
	//
	function onLocationError(error) {
		alert('code: '    + error.code    + '\n' +
		     'message: ' + error.message + '\n');
	}

	navigator.geolocation.watchPosition(onLocationSuccess, onLocationError);

  }
}
