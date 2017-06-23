import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';
import { MusicControls } from '@ionic-native/music-controls';
import { Http, HttpModule } from '@angular/http';
import { AudioGeoService } from '../service/audio-geo-service';
import { Facebook } from '@ionic-native/facebook';
import { Platform } from 'ionic-angular';

import firebase from 'firebase';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Connexion } from '../pages/connexion/connexion';
import { AudioGeo } from '../pages/audio-geo/audio-geo';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AudioGeo
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Connexion,
    AudioGeo
  ],
  providers: [ 
    MusicControls,
    StatusBar,
    SplashScreen,
    Geolocation,
    AudioGeoService,
    Facebook,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
  constructor(platform: Platform) {
    firebase.initializeApp({
         apiKey: "AIzaSyCCvnlBTEM0ECcjHGK4f3V4d08KMkBltwg",
    authDomain: "audioguidegeo.firebaseapp.com",
    databaseURL: "https://audioguidegeo.firebaseio.com",
    projectId: "audioguidegeo",
    storageBucket: "audioguidegeo.appspot.com",
    messagingSenderId: "764865816234"
        
    });

    platform.ready().then(() => {
    // Okay, so the platform is ready, and our plugins are available.
    // Here you can do any higher level native things you might need.
    
  });
}
}
