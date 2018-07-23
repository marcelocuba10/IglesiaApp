import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

import { NoticiasPage } from '../pages/noticias/noticias';
import { InformacionesGeneralesPage } from '../pages/informaciones-generales/informaciones-generales';
import { RequisitosMatrimonioPage } from '../pages/requisitos-matrimonio/requisitos-matrimonio';
import { RequisitosBautismoPage } from '../pages/requisitos-bautismo/requisitos-bautismo';
import { RequisitosConfirmaciNPage } from '../pages/requisitos-confirmaci-n/requisitos-confirmaci-n';
import { RequisitosComuniNPage } from '../pages/requisitos-comuni-n/requisitos-comuni-n';
import { SliderPage } from '../pages/slider/slider';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = SliderPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToBienvenido(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HomePage);
  }goToNoticias(params){
    if (!params) params = {};
    this.navCtrl.setRoot(NoticiasPage);
  }goToInformacionesGenerales(params){
    if (!params) params = {};
    this.navCtrl.setRoot(InformacionesGeneralesPage);
  }goToRequisitosMatrimonio(params){
    if (!params) params = {};
    this.navCtrl.setRoot(RequisitosMatrimonioPage);
  }goToRequisitosBautismo(params){
    if (!params) params = {};
    this.navCtrl.setRoot(RequisitosBautismoPage);
  }goToRequisitosConfirmaciN(params){
    if (!params) params = {};
    this.navCtrl.setRoot(RequisitosConfirmaciNPage);
  }goToRequisitosComuniN(params){
    if (!params) params = {};
    this.navCtrl.setRoot(RequisitosComuniNPage);
  }
}

