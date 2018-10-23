import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../providers/api/api.service';
import { URLS } from '../../../models/urls';
import { ElementoTest } from '../../../models/elements';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
public elemento: ElementoTest = new ElementoTest('','',[]);
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems(){
    let url = URLS.items;
    this.api.get(url).subscribe(
      (respuesta)=>{
        this.elemento.app_name = respuesta["app_name"];
        this.elemento.test_name = respuesta["test_name"];
        this.elemento.list = respuesta["list"];
      },
      (error)=>{
        console.log('Error getting Items ', error);
      }
    )
  }
}
