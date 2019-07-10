import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
@Component({
    selector: 'pm-product',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit
{ 
    pageTitle: string = 'Product List';  
    imageWidth: number = 70;
    imageMargin: number = 2;
    showImage: boolean = false;

    _listFilter: string;
    get listerFilter(): string {
      return this._listFilter;
    }

    set listerFilter(value:string){
      this._listFilter = value;
      this.filteredProducts = this.listerFilter ? this.performFilter(this.listerFilter) : this.products;
    }

    filteredProducts: IProduct[];
    products: IProduct[]  = 
    [ 
      {
        "productId": 5,
        "productName": "Hammer",
        "productCode": "TBX-0048",
        "releaseDate": "May 21, 2016",
        "description": "Curved claw steel hammer",
        "price": 8.9,
        "starRating": 4.8,
        "imageUrl": "https://cdn10.bigcommerce.com/s-ezhe8/products/7722/images/17249/Trade_Claw_Hammer.jpg_1__99671.1553770049.1280.1280.jpg?c=2"
      },
          {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/616fiXob1NL._SL1200_.jpg"
          }
    ];

    constructor (){
      this.filteredProducts = this.products;
      this.listerFilter = 'cart';
    }

    performFilter(filterBy: string): IProduct[]{
      filterBy = filterBy.toLocaleLowerCase();
      return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1)
    }

    toggleImage(): void {
      this.showImage = !this.showImage;
    }

    ngOnInit(): void{
      console.log('In OnInit');
    }


}