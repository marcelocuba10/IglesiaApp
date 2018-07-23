import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { NotesService } from '../../services/notes.service';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

  note: any = { id: null, title: null, description: null };
  id = null;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alerCtrl: AlertController, public alertCtrl: AlertController, public notesService: NotesService) {
    this.id = navParams.get('id');
    if (this.id != 0) {
      //this.note = notesService.getNote(this.id); Proceso antiguo
      notesService.getNote(this.id)
        .valueChanges().subscribe(note => {
          this.note = note;
        });
    }
  }

  addNote() {
    if (this.id != 0) {
      //si el Id es distinto a 0, Estamos editando..
      this.notesService.editNote(this.note);
      this.msgEdit();
    } else {
      this.note.id = Date.now();
      this.notesService.createNote(this.note);
      this.msgCreate();
    }
    this.navCtrl.pop(); // llama al boton de atras..
  }

  public deleteNote() {
    this.msgDelete();
  }

  msgEdit() {
    let alert = this.alerCtrl.create({
      message: 'Nota editada con exito!',
      buttons: ['Ok']
    });
    alert.present()
  }

  msgCreate() {
    let alert = this.alerCtrl.create({
      message: 'Nota creada con exito!',
      buttons: ['Ok']
    });
    alert.present()
  }

  msgDelete() {
    const confirm = this.alertCtrl.create({
      title: 'Alerta:',
      message: 'Esta seguro de eliminar el anuncio?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            this.navCtrl.pop();
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
            if (this.id != 0) {
              this.notesService.deleteNote(this.note);
            }
            this.navCtrl.pop();
          }
        }
      ]
    });
    confirm.present();
  }

}
