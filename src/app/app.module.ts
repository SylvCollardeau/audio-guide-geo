import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';
import { MusicControls } from '@ionic-native/music-controls';
import { Http, HttpModule } from '@angular/http';
import { AudioGeoService } from '../service/audio-geo-service';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
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
    AudioGeo
  ],
  providers: [ 
    MusicControls,
    StatusBar,
    SplashScreen,
    Geolocation,
    AudioGeoService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
