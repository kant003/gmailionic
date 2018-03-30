import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { NuevoCorreoPage } from '../nuevo-correo/nuevo-correo';

/**
 * Generated class for the CorreoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-correo',
  templateUrl: 'correo.html',
})
export class CorreoPage {
  correoActual;

  constructor(public modal:ModalController, public navCtrl: NavController, public navParams: NavParams) {
    this.correoActual = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CorreoPage');
  }

  mostrarModal(tipo){
    console.log(tipo)
    let modal = this.modal.create(NuevoCorreoPage, {tipo:tipo, correo:this.correoActual});
    modal.present();
  }

}
