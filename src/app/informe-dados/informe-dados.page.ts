import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton, AlertController, NavController
} from '@ionic/angular/standalone';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-informe-dados',
  templateUrl: 'informe-dados.page.html',
  styleUrls: ['informe-dados.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, FormsModule, IonButton]
})
export class InformeDadosPage {
  email: string = '';
  telefone: string = '';

  constructor(
    private alertController: AlertController,
    private navCtrl: NavController
  ) {}

  async enviarDados() {
    const alert = await this.alertController.create({
      header: 'Confirme seus dados',
      message: `Email: ${this.email} - Telefone: ${this.telefone}`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Confirmar',
          handler: () => {
            // Navegar de volta à página principal após enviar dados
            this.navCtrl.navigateBack('/home');
          },
        },
      ],
    });

    await alert.present();
  }
}
