import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NotesService } from '../../services/notes.service';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-noticias',
  templateUrl: 'noticias.html'
})
export class NoticiasPage {
  notes = [];
  @ViewChild('myNav') nav: NavController;
  constructor(public navCtrl: NavController, public notesService: NotesService) {
    //this.notes=notesService.getNotes();

    this.notesService.getNotes().subscribe(notas => {
      this.notes = notas;
    });
  }

  public goToDetail(id) {
    this.navCtrl.push(DetailPage, { id: id });
  }

  public createNote() {
    this.navCtrl.push(DetailPage, { id: 0 });
  }
}
