import { Injectable } from '@angular/core'; //me permite que este servicio se pueda inyectar en cualquier otro componente
import { AngularFireDatabase } from 'angularfire2/database/database';

@Injectable()
export class NotesService {
    constructor(public afDB: AngularFireDatabase) { }
    notes = [];
    //se elmina el contenido cuando vinculamos a firebase
    // notes = [
    //     { id: 1, title: 'Nota1', description: 'descripcion 1 aqui..' },
    //     { id: 2, title: 'Nota2', description: 'descripcion 2 aqui..' },
    //     { id: 3, title: 'Nota3', description: 'descripcion 3 aqui..' }
    // ];
    public getNotes() {
        //return this.notes;
        return this.afDB.list("avisos/").valueChanges();
    }
    public getNote(id) {
        //return this.notes.filter(function (e, i) { return e.id == id })[0] || { id: null, title: null, description: null };
        return this.afDB.object('avisos/' + id);
    }
    public createNote(note) {
        this.afDB.database.ref('avisos/' + note.id).set(note);
        // this.notes.push(note); primer ejemplo forma local
    }
    public editNote(note) {
        // for (let i=0; i < this.notes.length; i++) {
        //     if (this.notes[i].id == note.id) {
        //         this.notes[i] = note;
        //     }
        // }
        this.afDB.database.ref('avisos/' + note.id).set(note);
    }

    // public deleteNote(note) {
    //     for (let i=0; i < this.notes.length; i++) {
    //         if (this.notes[i].id == note.id) {
    //             this.notes.splice(i,1);  //El splice te sirve para modificar un array eliminando y/o añadiendo nuevos elementos a él. (indice,cant para eliminar)
    //         }
    //     }
    // }

    public deleteNote(note) {
        // let index = this.notes.indexOf(note);
        // this.notes.splice(index, 1);
        this.afDB.database.ref('avisos/' + note.id).remove();
    }

}