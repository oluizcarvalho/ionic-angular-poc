import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosService {
  users: Array<{
    id: number, nome: string, login: string, senha: string, email:
      string, img: string, icon: string
  }>;

  constructor() {
    this.users = [
      {
        id: 1001, nome: 'Bóris Faria de Marin', login: 'teste1', senha: '123',
        email: 'teste1@teste.com', img: '../assets/teste1.jpg', icon: 'start'
      },
      {
        id: 1002, nome: 'Jackson Burgos Valdez', login: 'jackson2', senha: '123',
        email: 'teste2@teste.com', img: '../assets/teste2.jpg', icon: 'start'
      }
    ]
  }
}
