import { Injectable, EventEmitter, Output } from '@angular/core';
import { Storage } from '@ionic/storage';

import { Profile } from '../../../models/profile';
import { prepareProfile } from 'selenium-webdriver/firefox';

@Injectable({
  providedIn: 'root'
})

export class SettingsService {

  @Output() profile: EventEmitter<Profile>= new EventEmitter();
  public perfil:Profile;
  constructor(
    public storage: Storage
  ) { }

  public saveProfile(perfil: Profile) {
    this.storage.set('profile', JSON.stringify(perfil)).then(
      (valor)=>{console.log('Profile guardado',valor)},
      (error) =>{console.log('Profile ERROR',error)}
    )
  }

  public getProfile() {
    return new Promise((resolve) => {
      this.storage.get('profile')
        .then((valor) => {
          resolve (JSON.parse(valor));
        })
        .catch((error) => {
          console.log('Error recogiendo perfil');
          resolve (null);
        })
    })
  }


//****************INICIALIZA PROFILE */
//Si no existe crea un perfil DEMO lo carga en profile y lo guarda en storage
//Si existe lo carga en profile con la ultima fecha, y guarda en storage con la nueva fecha.
public startProfile(){
  this.storage.get('profile').then(
  (data)=>{
    let perfil:Profile;
    perfil= new Profile('Demo User',new Date(),null);
  if (data !== null){
    data = JSON.parse(data);
    perfil.name = data["name"]
    perfil.last_date = data["last_date"]
    perfil.avatar = data["avatar"]
  }
    this.perfil= perfil;
    this.profile.emit(perfil)
    console.log('profile Settings',this.profile,perfil);
    perfil.last_date = new Date();
    this.saveProfile(perfil);
});
}


}
