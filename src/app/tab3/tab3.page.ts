import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AngularFireList } from '@angular/fire/compat/database';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ForumService } from '../forum.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
  readonly apiURL: string;
  constructor(private srv: ForumService, private authSrv: AuthService, private router: Router, private http: HttpClient) {
  }

  cancel(){
    this.router.navigateByUrl('tabs/tab2');
  }

  carregar() {
    this.http.get(`${ this.apiURL }/plants`)
             .subscribe(resultado => console.log(resultado));
  }
  ngOnInit() {}

}
