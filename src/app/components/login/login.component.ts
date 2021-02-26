import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  datos:object={
    user:'andres22',
    pass:'angular'
    
  };

  username:any = '';
  contrasena:any = '';
  mensajeExitoso:string = 'Felicidades has podido acceder';
  mensajePaila:string ='lo siento no puedes acceder :(';
  constructor() { }

  ngOnInit(): void {
  }

  login(user:any){


    if(user.name === this.username && user.pass === this.contrasena){

      this.mensajeExitoso;

    }else{

      this.mensajePaila;
    }


  }

  login(datos);

}
