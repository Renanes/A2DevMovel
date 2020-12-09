import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AutenticacaoService } from 'src/app/services/usuario/autenticacao.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {

  public email:string="";
  public password:string="";
  public password2:string="";
  public mensagem:string="";


  constructor(
    public autenticaoService: AutenticacaoService,
    public router:Router,
    public toastController: ToastController
  ) { }

  insereUsuario() {
    if(this.password === this.password2) {
      this.autenticaoService.insereFirebase(this.email, this.password).then((res) => {
        this.email = '';
        this.password = '';
        this.password2 = '';
        this.router.navigate(['/login']);
        
      }).catch((erro) => {
        this.mensagem = "Erro ao incluir usuário";
        this.exibeMensagem();
      })
    } else {
      this.mensagem = "As senhas não coincidem";
      this.exibeMensagem();
    }
  }

  async exibeMensagem() {
    const toast = await this.toastController.create({
      message: this.mensagem,
      duration: 2000
    });
    toast.present();
  }

  ngOnInit() {
  }

}
