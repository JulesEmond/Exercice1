import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/client';
import { Organisme } from 'src/app/models/organisme';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  validMessage:string = '';
  user:User;
  type:string = '';

 //Il manque un FormGroup
  
  constructor(private userService : UserService, private router : Router) { }

  ngOnInit(): void {
    sessionStorage.clear();
  }

  public onSubmit(){
    if(this.loginForm.valid){
      this.userService.login(this.loginForm.get('courriel').value, this.loginForm.get('motDePasse').value).subscribe(
        (data) => {
          //Exemple d'appel au backend
            }
        );
        (err) => {
          console.log(err);
          this.validMessage = 'Erreur lors de la connexion';
        }
      } else {
        this.validMessage = 'Veuillez remplir le formulaire avant de le soumettre!';
      }
  }

  //Exemple de fonctions en TS
}
