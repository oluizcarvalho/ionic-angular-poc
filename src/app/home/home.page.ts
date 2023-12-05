import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  ToastController
} from '@ionic/angular/standalone';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, NgForOf],
})
export class HomePage {
  listaItens: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

  constructor(private toastController: ToastController) {}

  async mostrarMensagem(item: string) {
    const toast = await this.toastController.create({
      message: `Item escolhido: ${item}`,
      duration: 2000,
      position: 'bottom',
    });
    await toast.present();
  }
}
