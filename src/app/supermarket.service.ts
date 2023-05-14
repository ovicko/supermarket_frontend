import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SupermarketService {
  supermarkets = [
    {id: 1, name: "Supermarket 1", location: "Location 1"},
    {id: 2, name: "Supermarket 1", location: "Location 2"},
    {id: 3, name: "Supermarket 1", location: "Location 3"},
    {id: 4, name: "Supermarket 1", location: "Location 4"},
    {id: 5, name: "Supermarket 1", location: "Location 5"},

  ];

  constructor() { }

  public getSupermarkets():Array<{id, name, location}>{
    return this.supermarkets;
  }

}
