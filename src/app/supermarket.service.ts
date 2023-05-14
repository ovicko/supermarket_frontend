import { Injectable } from '@angular/core';
import { SupermarketModel } from './models/supermarket-model.model';

@Injectable({
  providedIn: 'root'
})
export class SupermarketService {
  supermarkets:SupermarketModel[] = [
    new SupermarketModel(1,"Supermarket 1","Location 1"),
    new SupermarketModel(2,"Supermarket 2","Location 2"),
    new SupermarketModel(3,"Supermarket 3","Location 3"),
    new SupermarketModel(4,"Supermarket 4","Location 4"),
    new SupermarketModel(5,"Supermarket 5","Location 5"),
    new SupermarketModel(6,"Supermarket 6","Location 6"),
    new SupermarketModel(7,"Supermarket 7","Location 7"),
    new SupermarketModel(8,"Supermarket 8","Location 8"),
  ];

  constructor() { 
  }

  public getSupermarkets():Array<SupermarketModel>{
    return this.supermarkets;
  }

  public getSupermarketById(supermarketId:number):SupermarketModel {
    return this.supermarkets.find(item=>item.id === supermarketId);
  }

}
