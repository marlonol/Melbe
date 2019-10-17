import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';

/**
 * Generated class for the RecoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recover',
  templateUrl: 'recover.html',
})
export class RecoverPage {
  @ViewChild('email') emailDigitado


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public fire: AngularFireAuth,
              public toastCtrl: ToastController) { }

    recover(){
      let toast = this.toastCtrl.create({duration: 2000, position: 'botom'})
      
      this.fire.auth.sendPasswordResetEmail(this.emailDigitado.value)      
      .then(() =>{ // se deu certo
        toast.setMessage('Uma solicitação foi enviada para seu e-mail!')
        toast.present()
        this.navCtrl.setRoot(HomePage)
      })
      .catch((error: any) => {  // caso tenha dado errado
        if(error.code == 'auth/invalid-email'){
          toast.setMessage('E-mail Inválido!')
        }
        else if(error.code == 'auth/user-not-found'){
          toast.setMessage('Usuário não encontrado!')
        toast.present()
        }
      })
    }
    voltar(){
      this.navCtrl.setRoot(HomePage)
    }

}
