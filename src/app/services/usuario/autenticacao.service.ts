import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  public usuarioDados:any;
  public nome:string = "";
  public email:string = "";

  constructor(public ngFireAuth: AngularFireAuth) { 
    this.usuarioDados = null;

    this.ngFireAuth.authState.subscribe(user => {
      if (user) {
        this.usuarioDados = user;
        this.nome = this.usuarioDados.displayName;
        this.email = this.usuarioDados.email;    
      } else {
        this.usuarioDados = null;
      }
    });
  }

  public user_id:string;

  loginFirebase(email, password) {
    return this.ngFireAuth.signInWithEmailAndPassword(email, password);
  }

  insereFirebase(email, password) {
    return this.ngFireAuth.createUserWithEmailAndPassword(email, password);
  }

  logout() {
    return this.ngFireAuth.signOut();
  }
}
