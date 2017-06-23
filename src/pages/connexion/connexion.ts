import { Component } from '@angular/core';
import { NavController, Platform, AlertController, LoadingController } from 'ionic-angular';
import { Http} from '@angular/http'
import { AudioGeo } from '../audio-geo/audio-geo';
import { HomePage } from '../home/home';
import { Facebook } from '@ionic-native/facebook';
import firebase from 'firebase';

declare var window: any;

@Component({
  selector: 'page-connexion',
  templateUrl: 'connexion.html'
})

export class Connexion {
  
  private login : any;
  private password: any;
  userProfile: any = null;
  
  constructor(public navCtrl: NavController, private platform: Platform, private facebook: Facebook, public alertCtrl: AlertController, public loadingCtrl:LoadingController) {}

  facebookLogin(){
		this.facebook.login(['email']).then( (response) => {
			const facebookCredential = firebase.auth.FacebookAuthProvider
				.credential(response.authResponse.accessToken);

			firebase.auth().signInWithCredential(facebookCredential)
			.then((success) => {
				console.log("Firebase success: " + JSON.stringify(success));
				this.userProfile = success;
			})
			.catch((error) => {
				console.log("Firebase failure: " + JSON.stringify(error));
			});

		}).catch((error) => { console.log(error) });
	}
	
    doLogin() {
	
      if(this.login == '' || this.password == '') {
        let alert = this.alertCtrl.create({
          title:'Erreur', 
          subTitle:'Tous les champs sont obligatoires',
          buttons:['OK']
        });
        alert.present();
        return;
      }  
      else {
		if(this.login == 'Admin' && this.password == 'Pass'){
		
			localStorage.setItem('login', this.login);
		
			this.navCtrl.push(HomePage,{});
		}
		else {
			let alert = this.alertCtrl.create({
				title:'Erreur de connexion', 
				subTitle:'Mauvais identifiant ou mot de passe',
				buttons:['OK']
			});
			alert.present();
			return;
		}
      }   

    } 
 }

