import {Component} from '@angular/core';
import {
  AlertController,
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {DadosService} from "../services/dados.service";

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, FormsModule, IonButton, IonButtons, IonBackButton],
})
export class LoginPage {
  usuario: string = '';
  senha: string = '';
  users: Array<{
    id: number, nome: string, login: string, senha: string, email:
      string, img: string, icon: string
  }> = [];

  constructor(
    private router: Router,
    private alertController: AlertController,
    private dadosServ: DadosService
  ) {
    this.users = this.dadosServ.users;
  }

  realizarLogin() {
    const index = this.users.findIndex(user => user.login === this.usuario)

    if (index >= 0 && this.usuario === this.users[index].login && this.senha === this.users[index].senha) {
      this.router.navigate(['/bem-vindo'], {queryParams: {usuario: this.usuario}});
    } else {
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
