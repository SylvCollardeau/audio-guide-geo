import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { ShowMap } from '../show-map/show-map';
import { Connexion } from '../connexion/connexion';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private login : any;
  public connexion: any;
  public showMap: any;
  
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
  	this.showMap = ShowMap;
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
