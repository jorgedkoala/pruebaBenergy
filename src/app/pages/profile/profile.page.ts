import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../providers/settings/settings.service';
import { Profile } from '../../../models/profile'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
public perfil:Profile;
public avatar:string;
public edit:boolean=false; //Activa desactiva el modo Edición del nombre.
  constructor(
    public settings: SettingsService
  ) { }


  //*** Cargo el perfil desde settings, si no existe me subscribo a profile */
  //*** Profile en settings es un eventEmitter que acualiza el perfil */
  //*** El perfil se inicializa en app.component */
  ngOnInit() {
    console.log('Profile')
    this.settings.getProfile().then((perfil)=>{
      console.log(perfil);
      if (perfil){
      this.perfil = new Profile(perfil["name"],perfil["last_date"],perfil["avatar"]);
      }else{
        console.log('no habia perfil');
        this.settings.profile.subscribe(
        (perfil)=>{
          this.perfil=perfil;
          console.log(perfil,this.perfil)
        })
      }
      if (this.perfil.avatar == null) {
        this.perfil.avatar = '/assets/images/demoAvatar.png';
      }
    },
  (error)=>{
    console.log(error)
  });
  }

  saveProfile(){
    this.edit = false;
    this.settings.saveProfile(this.perfil);
  }

  updateImg(evento){
    console.log('Updating Img',evento)
    var fichero    = evento.target.files[0];
    var reader  = new FileReader();
    var that = this
    reader.onload = (function(theFile) {
      return function(e) {
        that.perfil.avatar= e.target.result;
        that.perfil.last_date=new Date();
        that.avatar= e.target.result;
        that.saveProfile();
      };
    })(fichero);
    reader.readAsDataURL(fichero)
  }



}
