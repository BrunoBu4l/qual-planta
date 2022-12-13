import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
//import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Capacitor } from '@capacitor/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Platform } from '@ionic/angular';
import { Filesystem, Directory } from '@capacitor/filesystem';
import {defineCustomElements} from '@ionic/pwa-elements/loader';

interface Planta{
  name: { nameId: number};
}

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})

export class Tab4Page implements OnInit {
  plant: Planta;

  public dados: Array<object> = [];

  public photos: [] = [];
  filepath: string;
  webviewPath: string;

  public plantas: string;
  //url = 'https://services.tropicos.org/Name/Search?name=poa+annua&apikey=3e8e7542-af9c-4d73-9aad-4feecaf4028f&format=json';
  url: string;
  nome: string;
  teste: string;
  photo: SafeResourceUrl;
  isDesktop: true;

  constructor( private router: Router,private platform: Platform,
    private sanitizer: DomSanitizer) {

    this.dados = [
      {
        nome: 'Cactos',
        img: 'https://i.pinimg.com/564x/59/da/fa/59dafa5d1a545f59777e4df854f6522f.jpg',

      },
      {
        nome: 'Cactos',
        img: 'https://i.pinimg.com/564x/59/da/fa/59dafa5d1a545f59777e4df854f6522f.jpg',
      },
    // eslint-disable-next-line @typescript-eslint/semi
    ]
  }


  async procurarPlanta() {
    this.url = 'https://services.tropicos.org/Name/Search?name='+this.nome+'&apikey=3e8e7542-af9c-4d73-9aad-4feecaf4028f&format=json';
    this.plant = await this.random();
  }

  async random(){
    const resp = await fetch(this.url);
    const data = await resp.json();
    const { results: plant } = data;
    return plant;
  }

  cancel(){
    this.router.navigateByUrl('tabs/tab2');
  }

  ngOnInit() {
  }

  checkPlatformForWeb() {
    if(Capacitor.getPlatform() === 'web') {
      return true;
    }
    return false;
  }

  async takePicture() {

    const image = await Camera.getPhoto({
      quality: 100,
      width: 400,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Prompt
    });

    this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));
  }


  onFileChoose(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    const pattern = /..img-*/;
    const reader = new FileReader();

    if (!file.type.match(pattern)) {
      console.log('File format not supported');
      return;
    }

    reader.onload = () => {
      this.photo = reader.result.toString();
    };
    reader.readAsDataURL(file);

  }

}


