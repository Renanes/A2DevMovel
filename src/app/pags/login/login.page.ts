import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AutenticacaoService } from 'src/app/services/usuario/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public email:string="";
  public password:string="";
  public mensagem:string="";

  constructor(
    public autenticaoService: AutenticacaoService,
    public router:Router,
    public toastController: ToastController
  ) { }

  loginUsuario() {
    this.autenticaoService.loginFirebase(this.email, this.password).then((rest) => {
      this.router.navigate(['/home']);
      this.email = '';
      this.password = '';
    }).catch((erro) => {
      this.mensagem = "E-mail e/ou senha inválido(s)";
      this.exibeMensagem();
    })
  }

  async exibeMensagem() {
    const toast = await this.toastController.create({
      message: this.mensagem,
      duration: 2000
    });
    toast.present();
  }

  ngOnInit() { }
  
}
