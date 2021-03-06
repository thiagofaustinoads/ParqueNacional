import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { NotificacoesPage } from '../pages/notificacoes/notificacoes';
import { RegisocPage } from '../pages/regisoc/regisoc';
import { AnimaisperdidosPage } from '../pages/animaisperdidos/animaisperdidos';
import { AnimaisselvagensPage } from '../pages/animaisselvagens/animaisselvagens';
import { EstruturaparquePage } from '../pages/estruturaparque/estruturaparque';
import { NovasespeciesPage } from '../pages/novasespecies/novasespecies';
import { CrimesambientaisPage } from '../pages/crimesambientais/crimesambientais';
import { SobrePage } from '../pages/sobre/sobre';
import { ConfiguracoesPage } from '../pages/configuracoes/configuracoes';
import {RegistrarocorrenciaPage} from "../pages/registrarocorrencia/registrarocorrencia";
import { AjudaPage } from '../pages/ajuda/ajuda';
import { InfoPage } from '../pages/info/info';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    NotificacoesPage,
    RegisocPage,
    AnimaisperdidosPage,
    AnimaisselvagensPage,
    EstruturaparquePage,
    NovasespeciesPage,
    CrimesambientaisPage,
    SobrePage,
    ConfiguracoesPage,
    RegistrarocorrenciaPage,
    AjudaPage,
    InfoPage,
   
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    NotificacoesPage,
    RegisocPage,
    AnimaisperdidosPage,
    AnimaisselvagensPage,
    EstruturaparquePage,
    NovasespeciesPage,
    CrimesambientaisPage,
    SobrePage,
    ConfiguracoesPage,
    RegistrarocorrenciaPage,
    AjudaPage,
    InfoPage,
    

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
