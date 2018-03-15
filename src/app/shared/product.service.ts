import { Injectable } from '@angular/core';
import { Product } from '../entities/product';


@Injectable()
export class ProductService {

 
  private products : Product[];

  constructor() {
    this.products = [
      {id:"prod01", name: "name 1", price: 3000, photo: "shampoo1.png"},
      {id:"prod02", name: "name 2", price: 800, photo: "shampoo2.png"},
      {id:"prod03", name: "name 3", price: 5000, photo: "shampoo3.png"},
      {id:"prod04", name: "name 4", price: 1500, photo: "shampoo4.png"},
      ]
   }
   findAll():Product[]{
     return this.products;
   }
   find(id:string):Product{
     var index = this.getSelectionIndex(id);
     return this.products[index];
   }
   private getSelectionIndex(id:string){
     for(var i = 0; i < this.products.length; i++ ){
       if(this.products[i].id == id){
         return i;
       }
     }
     return -1
   }
}
