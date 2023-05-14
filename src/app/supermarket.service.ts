import { Injectable } from '@angular/core';
import { SupermarketModel } from './models/supermarket-model.model';

@Injectable({
  providedIn: 'root'
})
export class SupermarketService {
  supermarkets:SupermarketModel[] = [
    new SupermarketModel(1,"Supermarket 1","Location 1"),
    new SupermarketModel(2,"Supermarket 2","Location 12"),
    new SupermarketModel(3,"Supermarket 3","Location 13"),
    new SupermarketModel(4,"Supermarket 4","Location 14"),
    new SupermarketModel(1,"Supermarket 1","Location 1"),
    new SupermarketModel(2,"Supermarket 2","Location 12"),
    new SupermarketModel(3,"Supermarket 3","Location 13"),
    new SupermarketModel(4,"Supermarket 4","Location 14"),
  ];

  constructor() { 
  }

  public getSupermarkets():Array<SupermarketModel>{
    return this.supermarkets;
  }

}
