import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';

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
    private streamingMedia: StreamingMedia,
    private navParams: NavParams
  ) { }

  ngOnInit() {
    const video: string = this.navParams.get('video');
    console.log('VIDEO: ',video);
    this.video=parseInt(video)-1;
    this.videos = [
      'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
      'https://player.vimeo.com/external/85569724.sd.mp4?s=43df5df0d733011263687d20a47557e4',
      'http://mirrors.standaloneinstaller.com/video-sample/small.mp4'
    ];
  }

  play(video){
    let options: StreamingVideoOptions = {
      successCallback: () => { console.log('Video played') },
      errorCallback: (e) => { console.log('Error streaming',e) },
      // shouldAutoClose: true,
      // controls: false}
    };
    let url = this.videos[video];
    this.streamingMedia.playVideo(url,options);
   // this.streamingMedia.playVideo('https://www.youtube.com/watch?v=D25DPvdoPfw', options);
  }

  cerrar(){
    console.log('Cerrar');
    this.modalController.dismiss();
  }
}
