import {Component} from '@angular/core';
import {
  IonApp,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonRouterOutlet,
  IonTitle,
  IonToolbar,
  MenuController
} from '@ionic/angular/standalone';
import {RouterLink} from "@angular/router";
import {NgForOf} from "@angular/common";
import {addIcons} from "ionicons";
import {cloudy, document, home, logIn} from "ionicons/icons";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, IonMenu, IonHeader, IonTitle, IonToolbar, IonContent, IonList, IonMenuToggle, IonItem, RouterLink, NgForOf, IonIcon, IonLabel],
})
export class AppComponent {
  pages: Array<{ title: string, url: string, icon: string }>;

  constructor(private menu: MenuController) {
    menu.enable(true);
    addIcons({home, document, cloudy, logIn});

    this.pages = [
      {title: 'Home', url: '/home', icon: 'home'},
      {title: 'Informe dados', url: '/informe-dados', icon: 'document'},
      {title: 'Badges', url: '/badges', icon: 'cloudy'},
      {title: 'Login', url: '/login', icon: 'log-in'},
    ];
  }
}
