import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RequisitosMatrimonioPage } from '../requisitos-matrimonio/requisitos-matrimonio';
import { RequisitosBautismoPage } from '../requisitos-bautismo/requisitos-bautismo';
import { RequisitosConfirmaciNPage } from '../requisitos-confirmaci-n/requisitos-confirmaci-n';
import { RequisitosComuniNPage } from '../requisitos-comuni-n/requisitos-comuni-n';

@Component({
  selector: 'page-informaciones-generales',
  templateUrl: 'informaciones-generales.html'
})
export class InformacionesGeneralesPage {

  constructor(public navCtrl: NavController) {
  }
  goToRequisitosMatrimonio(params){
    if (!params) params = {};
    this.navCtrl.push(RequisitosMatrimonioPage);
  }goToRequisitosBautismo(params){
    if (!params) params = {};
    this.navCtrl.push(RequisitosBautismoPage);
  }goToRequisitosConfirmaciN(params){
    if (!params) params = {};
    this.navCtrl.push(RequisitosConfirmaciNPage);
  }goToRequisitosComuniN(params){
    if (!params) params = {};
    this.navCtrl.push(RequisitosComuniNPage);
  }
}
