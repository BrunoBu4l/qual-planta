import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  nome: string;
  email: string;
  senha: string;

  constructor(private authSrv: AuthService, private router: Router) { }

  ngOnInit() {
  }

  registrar() {
    this.authSrv.registerUser(this.email, this.senha).then(res => {
      this.authSrv.signIn(res.user.email, this.senha).then(usr => {
        this.router.navigate(['tab2']);
      });
    }).catch( e => {
      //alert(e);
      alert('Email ou senha inválida!');
    });

  }

  cancel(){
    this.router.navigateByUrl('tabs/tab1');
  }
}

