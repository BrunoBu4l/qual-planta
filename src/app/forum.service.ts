import { Injectable } from '@angular/core';
import { Mensagens } from './mensagens';
import { User } from './user';

import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ForumService {

  //cidadesVisitadas!: Mensagens[];
  mensagens!: Mensagens[];
  users!: User[];

  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  usuario: string = '1';

  //cidadesVisitadasPorPais: any[] = [];
  mensagensPorUser: any[] = [];

  usersPais: any[] = [['Id', 'Nome', { role: 'style' }]];
  //locaisVisitadosRef: AngularFireList<any>;
  mensagensLidasRef: AngularFireList<any>;
  userListRef: AngularFireList<any>;

  objetoRef: AngularFireObject<any>;

  readonly displayName: string | null;

  constructor(private db: AngularFireDatabase, private authSrv: AuthService, private http: HttpClient) {
    // this.mock();
    this.mensagens = [];
    this.users = [];
  }
   // Get List
   getmensagensLidas() {
    this.mensagensLidasRef = this.db.list('/' + this.authSrv.getLoggedIn().id);
    return this.mensagensLidasRef;
  }

  getUserList() {
    this.userListRef = this.db.list('/' + this.authSrv.getLoggedIn().id);
    return this.displayName;
  }



  refresh(){
    this.mensagensPorUser.splice(0, this.mensagensPorUser.length);
  }

  refreshed(){
    this.usersPais.splice(0, this.usersPais.length);
  }


}
