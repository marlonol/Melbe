import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { UsersProvider } from './../../providers/users/users'
import { ViewChild } from '@angular/core'

@IonicPage()
@Component({
  selector: 'page-user-list',
  templateUrl: 'user-list.html',
})
export class UserListPage {
  users: any[]
  page: number

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public userProvider: UsersProvider,
              public toastCtrl: ToastController
              ) { }

    ionViewDidEnter() {
      this.users = []
      this.page = 1
      this.getAllUsers(this.page)
    }
  
    getAllUsers(page: number) {
      this.userProvider.getAll(page)
        .then((result: any) => {
          for (var i = 0; i < result.data.length; i++) {
            var user = result.data[i]
            this.users.push(user)
          }  
        })
    }
  
    getUsers() {
        this.page += 1
        this.getAllUsers(this.page)
        
    }
  
    openUser(id: number) {
      this.userProvider.get(id)
        .then((result: any) => {
          this.navCtrl.setRoot('UserDetailPage', { user: result.data })
        })            
    }
}
