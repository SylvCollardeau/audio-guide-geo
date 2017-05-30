import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ShowMap } from '../show-map/show-map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public showMap: any;
  constructor(public navCtrl: NavController) {
  	this.showMap = ShowMap;
  }
}
