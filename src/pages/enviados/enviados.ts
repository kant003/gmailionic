import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { CorreosProvider } from '../../providers/correos/correos';
import { CorreoPage } from '../correo/correo';
import { NuevoCorreoPage } from '../nuevo-correo/nuevo-correo';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the EnviadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-enviados',
  templateUrl: 'enviados.html',
})
export class EnviadosPage {

  listaCorreos;
  correoPage = CorreoPage;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
  public correos: CorreosProvider,
  public modal: ModalController,
public storage: Storage ) {
   // this.listaCorreos = correos.enviados;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnviadosPage');
  }

  ionViewWillEnter(){
    this.storage.get('correosEnviados')
      .then(enviados=> {
        if(enviados == null){
          this.listaCorreos = [];
          this.correos.enviados = [];
        }else{
          this.listaCorreos = enviados
          this.correos.enviados = enviados;
        }
            })
      .catch(error=>console.log(error));
  }

  verCorreo(correo){
    this.navCtrl.push(this.correoPage, correo)
  }

  nuevo(){
    let modal = this.modal.create(NuevoCorreoPage, {tipo:'nuevo', correo:''});
    modal.present();
  }
}
