import { MusicControls } from '@ionic-native/music-controls';
import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { Http, Response } from '@angular/http';


@Injectable()
export class AudioGeoService {

    private audio;

    private lat = 0;
    private lng = 0;

	constructor(private musicControls: MusicControls, public http: Http){

	}

	public createMusicControls(music){
		this.musicControls.create({

		      track       : music.titre,
		  	  artist      : '',
		  	  cover       : '',      // optional, default : nothing
			    	 // hide previous/next/close buttons:
			  isPlaying : true,
			  dismissable : true,

			  hasPrev   : false,      // show previous button, optional, default: true
			  hasNext   : false,      // show next button, optional, default: true
			  hasClose  : true,      // show close button, optional, default: false

			  album       : '',     // optional, default: ''
			  duration : 0 , // optional, default: 0
			  elapsed : 0, // optional, default: 0

			  // Android only, optional
			  // text displayed in the status bar when the notification (and the ticker) are updated
			  ticker    : 'Now playing "' + music.titre + '"'
		});
	}

	public verifMusicJsonFile(latitude, longitude){
		let txtFile = "assets/file/music.json";

		let file = this.http.get(txtFile)
		.map((data) => data.json())
		.subscribe((result) => {
			for(let music of result){

				if (latitude == music.lat && longitude == music.lng){

					if (latitude != this.lat && longitude != this.lng){

						if(confirm("Voulez-vous lancer la musique " + music.titre)){

							this.audio = new Audio(music.path);

							this.lat = latitude;
			 				this.lng = longitude;

			 				this.createMusicControls(music);

			 				this.musicControls.subscribe().subscribe(action => {
								
							    switch(action) {
							       
							       case 'music-controls-pause':
							           this.audio.pause();
							           this.musicControls.updateIsPlaying(false);
							           break;
							       case 'music-controls-play':
							           this.audio.play();
							           this.musicControls.updateIsPlaying(true);
							           break;
							       case 'music-controls-destroy':
							           this.audio.pause();
							           this.audio.currentTime = 0;
							           this.musicControls.updateIsPlaying(false);
							           this.lat = 0;
							           this.lng = 0;
							           break;
							       default:
							           this.audio.pause();
							           this.audio.currentTime = 0;
							           this.musicControls.updateIsPlaying(false);
							           this.lat = 0;
							           this.lng = 0;
							           break;
				    			}	
							});

							

							this.musicControls.listen();
							this.musicControls.updateIsPlaying(true);

							this.audio.play();
						}

					}else{
						this.audio = null;
					}

				}else{
						this.audio = null;
				}
			}

		});

		return this.audio;
	}
}