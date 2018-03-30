import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NuevoCorreoPage } from './nuevo-correo';

@NgModule({
  declarations: [
    NuevoCorreoPage,
  ],
  imports: [
    IonicPageModule.forChild(NuevoCorreoPage),
  ],
})
export class NuevoCorreoPageModule {}
