import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AudioGeo } from '../audio-geo/audio-geo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public audioGeo: any;
  constructor(public navCtrl: NavController) {
  	this.audioGeo = AudioGeo;
  }
}
