import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
//import { EmailComposer } from '@ionic-native/email-composer/ngx';


@IonicPage()
@Component({
  selector: 'page-user-detail',
  templateUrl: 'user-detail.html',
})
export class UserDetailPage {
  user: any


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController
              /*public emailComposer: EmailComposer*/) {  
    this.user = this.navParams.data.user
  }

  backToList(){    
    this.navCtrl.setRoot('UserListPage')
    
    let alert = this.alertCtrl.create({
      title: `<b>${this.user.first_name} ${this.user.last_name}</b>`,
      subTitle: 'Agradece sua Visita!',
      buttons: ['OK']
    })
    alert.present()
  }

 
  
}

/*
// dando erro, retomar caso dê tempo.
sendMail(){
    let email = {
      to: 'max@mustermann.de',
      cc: 'erika@mustermann.de',
      bcc: ['john@doe.com', 'jane@doe.com'],
      attachments: [
        'file://img/logo.png',
        'res://icon.png',
        'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
        'file://README.pdf'
      ],
      subject: 'Cordova Icons',
      body: 'How are you? Nice greetings from Leipzig',
      isHtml: true
    }
    this.emailComposer.open(email); 

  }*/
