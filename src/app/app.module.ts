import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http'
import { EmailComposer } from '@ionic-native/email-composer/ngx'
import { AngularFireModule} from 'angularfire2'
import { AngularFireAuthModule} from 'angularfire2/auth'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UsersProvider } from '../providers/users/users';
import { RecoverPage } from '../pages/recover/recover';
import { Push } from '@ionic-native/push';


 
 var firebaseAuth = {
  apiKey: "AIzaSyCveYqtchOQMVxR0b-uj1H8T0qvofj3204",
  authDomain: "melbe-ba4f4.firebaseapp.com",
  databaseURL: "https://melbe-ba4f4.firebaseio.com",
  projectId: "melbe-ba4f4",
  storageBucket: "",
  messagingSenderId: "313409252431",
  appId: "1:313409252431:web:af8a4f7a9f476b3a680e3a",
  measurementId: "G-3GGW1SD5SN"
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RecoverPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseAuth)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RecoverPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Push,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsersProvider,
    EmailComposer
  ]
})
export class AppModule {}
