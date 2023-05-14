export class SupermarketModel {
   id: number;
   name: string;
   location: string;

   constructor(id: number, name: string, location:string) {
     this.id = id;
     this.name = name;
     this.location = location;
   }

   
   public getId() : number {
    return this.id;
   }

   public getName() : string {
    return this.name;
   }

   public getLocation() : string {
    return this.location;
   }
   
}
