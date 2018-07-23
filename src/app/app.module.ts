import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NotesService } from '../services/notes.service';
import { DetailPage } from '../pages/detail/detail';

import { NoticiasPage } from '../pages/noticias/noticias';
import { InformacionesGeneralesPage } from '../pages/informaciones-generales/informaciones-generales';
import { RequisitosMatrimonioPage } from '../pages/requisitos-matrimonio/requisitos-matrimonio';
import { RequisitosBautismoPage } from '../pages/requisitos-bautismo/requisitos-bautismo';
import { RequisitosConfirmaciNPage } from '../pages/requisitos-confirmaci-n/requisitos-confirmaci-n';
import { RequisitosComuniNPage } from '../pages/requisitos-comuni-n/requisitos-comuni-n';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { SliderPage } from '../pages/slider/slider';

export const firebaseConfig = {
  apiKey: "AIzaSyBst2PJLHJ_q9ayRKcesrfz9NLXx0vmhG0",
  authDomain: "iglesiaapp-fc9da.firebaseapp.com",
  databaseURL: "https://iglesiaapp-fc9da.firebaseio.com",
  storageBucket: "iglesiaapp-fc9da.appspot.com",
  messagingSenderId: '667648046629'
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SliderPage,
    DetailPage,
    NoticiasPage,
    InformacionesGeneralesPage,
    RequisitosMatrimonioPage,
    RequisitosBautismoPage,
    RequisitosConfirmaciNPage,
    RequisitosComuniNPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SliderPage,
    DetailPage,
    NoticiasPage,
    InformacionesGeneralesPage,
    RequisitosMatrimonioPage,
    RequisitosBautismoPage,
    RequisitosConfirmaciNPage,
    RequisitosComuniNPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NotesService
  ]
})
export class AppModule {}
