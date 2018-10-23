import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VideoComponent } from '../../components/video/video.component';



@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    public modalController : ModalController
  ) { }

  ngOnInit() {
  }

  async presentModal(idVideo:number) {
    var data = { message : 'hello world' };
    console.log('opening modal...')
    const modal = await this.modalController.create({
      component: VideoComponent,
      componentProps:{video:idVideo}
    });
    return await modal.present();
  }

  openVideo(video){
    console.log('showVideo',video);
    this.presentModal(video)
    .then((respuesta)=>{
      console.log(respuesta);
    })
    .catch((error)=>{
      console.log('Error',error);
    })
  }

}
