import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  //aqui podemos crear variables, constrantes, listas, arreglos, json , etc.
  //nombre_variable : tipo = valor;
  titulo: string= "PAGINA DE LOGIN";
  numero: number =5;
  decimal: number =5.0;
  existe: boolean=true;
  fecha: Date = new Date();
  nombres: string[]=["Pedro","Juan","Diego"];
  persona: any = {"nombre":"Jesion","Edad":5};

  //NgModel
  email: string= "";


  constructor() { }

  ngOnInit() {
  }

}
