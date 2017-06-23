import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AudioGeo } from '../audio-geo/audio-geo';
import { Connexion } from '../connexion/connexion';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  private login : any;
  public connexion: any;
  public audioGeo: any;
  
  constructor(public navCtrl: NavController) {
  	this.audioGeo = AudioGeo;
  	this.connexion = Connexion;
  	this.login = localStorage.getItem('login');
  }

  logout() {
	let alert = this.alertCtrl.create({
		title:'Vous allez être déconnecté', 
		buttons:[ {
			text: 'OK',
			role: 'out',
			handler: () => {
			  localStorage.removeItem('login');
			  this.navCtrl.push(HomePage,{});
			}
		  },
		  {
			text: 'Annuler',
			handler: () => {
			 
			}
		  }]
	});
	alert.present();
	
	
	return;
  }
}
