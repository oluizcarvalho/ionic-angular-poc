import {Component} from '@angular/core';
import {
  IonAlert,
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import {FormsModule} from '@angular/forms';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-informe-dados',
  templateUrl: 'informe-dados.page.html',
  styleUrls: ['informe-dados.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonLabel,
    IonInput,
    FormsModule,
    IonButton,
    IonBackButton,
    IonButtons,
    IonAlert,
    NgIf,
  ],
})
export class InformeDadosPage {
  emailText: string = '';
  telefoneText: string = '';
  public alertButtons = [
    {
      text: 'Cancelar',
      role: 'cancel',
      handler: () => {
        this.emailText = '';
        this.telefoneText = '';
      },
    },
    {
      text: 'Enviar',
      role: 'confirm',
      handler: (data: {email: string, phone: string}) => {
        console.log('entrou', data)
        this.emailText = data.email;
        this.telefoneText = data.phone;
      },
    },
  ];

  public alertInputs = [
    {
      name: 'email',
      placeholder: 'Email',
      type: 'text',
    },
    {
      name: 'phone',
      type: 'text',
      placeholder: 'Telefone',
    },
  ];
  constructor() {}
}
