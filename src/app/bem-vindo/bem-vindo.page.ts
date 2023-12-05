import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-bem-vindo',
  templateUrl: './bem-vindo.page.html',
  styleUrls: ['./bem-vindo.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class BemVindoPage {

  usuario: string = '';

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      if (params && params['usuario']) {
        this.usuario = params['usuario'];
      }
    });
  }

}
