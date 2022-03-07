import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../models/client';
import { BasicCrud } from './basic-crud.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService extends BasicCrud<Client, Number>{

  //Il manque le constructeur a la classe

  public logout(){
    sessionStorage.clear();
  }
}
