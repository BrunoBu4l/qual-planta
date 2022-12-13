import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ForumService } from '../forum.service';

@Component({
  selector: 'app-login',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  email: string;
  senha: string;

  constructor(private authSrv: AuthService, private router: Router, private srv: ForumService) { }

  ngOnInit() {
  }

  entrar() {
    this.authSrv.signIn(this.email, this.senha).then(res => {
      this.router.navigateByUrl('tabs/tab2');
    }).catch( e => {
      //alert(e);
      alert('Email ou senha inválida!');
    });
  }

  registrar() {
    this.router.navigate(['/registro']);
  }

}



