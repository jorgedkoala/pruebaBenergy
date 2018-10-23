import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
public videos: string[]=[];
public video: number;
  constructor(
    public modalController : ModalController,
    private navParams: NavParams
  ) { }

  ngOnInit() {
    const video: string = this.navParams.get('video');
    this.video=parseInt(video)-1;
    this.videos = [
      'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
      'https://player.vimeo.com/external/85569724.sd.mp4?s=43df5df0d733011263687d20a47557e4',
      'http://mirrors.standaloneinstaller.com/video-sample/small.mp4'
    ];
  }


  cerrar(){
    this.modalController.dismiss();
  }
}
