import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { CorreosProvider } from '../../providers/correos/correos';
import { CorreoPage } from '../correo/correo';
import { NuevoCorreoPage } from '../nuevo-correo/nuevo-correo';

/**
 * Generated class for the InboxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inbox',
  templateUrl: 'inbox.html',
})
export class InboxPage {
  listaCorreos: Object;
  correoPage= CorreoPage;

  constructor(
    public correos: CorreosProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    public modal: ModalController ) {
    this.listaCorreos = correos.lista;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InboxPage');
  }

  verCorreo(correo){
    this.navCtrl.push(this.correoPage, correo)
  }

  nuevo(){
    let modal = this.modal.create(NuevoCorreoPage, {tipo:'nuevo', correo:''});
    modal.present();
  }
}
