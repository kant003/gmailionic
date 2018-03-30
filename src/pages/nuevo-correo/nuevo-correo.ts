import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ToastProvider } from '../../providers/toast/toast';
import { CorreosProvider } from '../../providers/correos/correos';
import { Storage } from '@ionic/storage'
/**
 * Generated class for the NuevoCorreoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nuevo-correo',
  templateUrl: 'nuevo-correo.html',
})
export class NuevoCorreoPage {
  tipo;
  nombre: string;
  de: string;
  para: string;
  asunto: string;
  correo: any;
  mensaje: string;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public toastCtrl: ToastProvider,
    public correos: CorreosProvider,
    public storage: Storage) {

    this.tipo = navParams.get('tipo');
    this.correo = navParams.get('correo');

    if (this.tipo == "reply") {
      this.para = this.correo.direccion;
      this.asunto = "Re: "+this.correo.asunto;
    } else if (this.tipo == "replyall") {

    } else if (this.tipo == "reenviar") {
      this.asunto = this.correo.asunto;
    }
    console.log(this.tipo)
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevoCorreoPage');
  }

  cerrar() {
    this.viewCtrl.dismiss();
  }

  enviar() {
    let correo={
      nombre: 'no definido',
      de: this.de,
      para: this.para,
      asunto: this.asunto,
      mensaje: this.mensaje,
      fecha: new Date()
    }
    console.log(correo);

    this.correos.enviados.push(correo)
    this.storage.set('correosEnviados', this.correos.enviados)
      .then()
      .catch(error=>console.log(error))


    this.viewCtrl.dismiss();
    this.toastCtrl.presentToast("Correo enviado");
  }
}
