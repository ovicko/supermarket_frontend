export class ManagerModel {
    id: number;
    name: string;
    phone: string;
    email: string;
    supermarket: any;
 
    constructor(id: number, name: string, phone:string, email:string, supermarket:string) {
      this.id = id;
      this.name = name;
      this.phone = phone;
      this.email = email;
      this.supermarket = supermarket;
    }
}
