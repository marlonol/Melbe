import { Component, ViewChild } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth'
import { Users } from './users'
import { Push, PushObject, PushOptions } from '@ionic-native/push'

import { RecoverPage } from '../recover/recover';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  users: Users = new Users()

  @ViewChild('usuario') email
  @ViewChild('senha') password

  constructor(public navCtrl: NavController,
              public toastCtrl: ToastController,
              public fire: AngularFireAuth,
              private push: Push) {

                this.push.hasPermission().then((res: any) => {
                  
                  if (res.isEnabled) {
                    alert('Tem permissão');

                    const options: PushOptions = {
                      android: {},
                      ios: {
                          alert: 'true',
                          badge: true,
                          sound: 'false'
                      },
                      windows: {},
                      browser: {
                          pushServiceURL: 'http://push.api.phonegap.com/v1/push'
                      }
                    };
                    const pushObject: PushObject = this.push.init(options);
                    pushObject.on('notification').subscribe((notification: any) => { 
                      alert(notification.message)
                    });
                    pushObject.on('registration').subscribe((registration: any) => console.log('Device registered', registration));
                    pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));

                  }
                  else {
                    alert('Não tem permissão');
                  }

                });
              }

  openListUsers() {
    let toast = this.toastCtrl.create({ duration: 2000, position: 'botom'})
    this.fire.auth.signInWithEmailAndPassword(this.email.value, this.password.value)
    .then(data => {
      //caso de sucesso
      //console.log('Data do login: ', data)
      this.users.email = this.email.value
      this.users.senha = this.password.value
      this.navCtrl.setRoot('UserListPage')
    })
    .catch((error: any) =>{
      // caso de erro
      if(error.code == 'auth/invalid-email'){
        toast.setMessage('O e-mail digitado não é válido!')
      }
      else if(error.code == 'auth/user-disabled'){
        toast.setMessage('Este usuário foi desabilitado!')
      }
      else if(error.code == 'auth/user-not-found'){
        toast.setMessage('Usuário não encontrado!')
      }      
      else if(error.code == 'auth/wrong-password'){
        toast.setMessage('Senha incorreta!')
      }
      toast.present()
    })   
  }

  recover(){
    this.navCtrl.setRoot(RecoverPage)

  }


}
