import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton, AlertController
} from '@ionic/angular/standalone';
import { FormsModule } from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, FormsModule, IonButton],
})
export class LoginPage {
  usuario: string = '';
  senha: string = '';

  constructor(
    private router: Router,
    private alertController: AlertController
  ) {}

  realizarLogin() {
    // Simule uma validação simples (usuário e senha hardcoded)
    const usuarioValido = 'usuario';
    const senhaValida = 'senha';

    if (this.usuario === usuarioValido && this.senha === senhaValida) {
      // Login bem-sucedido, navegar para a página bem-vindo
      this.router.navigate(['/bem-vindo'], { queryParams: { usuario: this.usuario } });
    } else {
      // Exibir alerta se o login falhar
      this.exibirAlerta('Erro de Login', 'Usuário ou senha inválidos');
    }
  }

  async exibirAlerta(titulo: string, mensagem: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensagem,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
