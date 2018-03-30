import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CorreosProvider } from '../providers/correos/correos';
import { InboxPage } from '../pages/inbox/inbox';
//import { HttpClient } from '@angular/common/http';
import { CorreoPage } from '../pages/correo/correo';
import { NuevoCorreoPage } from '../pages/nuevo-correo/nuevo-correo';
import { ToastProvider } from '../providers/toast/toast';
import { EnviadosPage } from '../pages/enviados/enviados';
import { IonicStorageModule } from '@ionic/storage';


@NgModule({
  declarations: [
    MyApp,
    HomePage, InboxPage, CorreoPage, NuevoCorreoPage, EnviadosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, InboxPage, CorreoPage, NuevoCorreoPage, EnviadosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    CorreosProvider,
    ToastProvider,
  ]
})
export class AppModule { }
