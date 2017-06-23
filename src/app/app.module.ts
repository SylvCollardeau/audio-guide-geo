import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { Platform } from 'ionic-angular';

import { Facebook } from '@ionic-native/facebook';
import firebase from 'firebase';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ShowMap } from '../pages/show-map/show-map';
import { Connexion } from '../pages/connexion/connexion';
import { NativeAudio } from '@ionic-native/native-audio';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Connexion,
    ShowMap,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Connexion,
    ShowMap
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Facebook
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
