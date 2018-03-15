import { Component, OnInit } from '@angular/core';
import { Product } from '../../entities/product';
import { ProductService } from '../../shared/product.service';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {

  products: Product[];
  constructor(private productSevice:ProductService) { }

  ngOnInit() {
    this.products = this.productSevice.findAll();
    
  }

}
