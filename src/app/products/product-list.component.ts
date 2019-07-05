import { Component } from "@angular/core";
@Component({
    selector: 'pm-product',
    templateUrl: './product-list.component.html'
})
export class ProductListComponent
{ 
    pageTitle: string = 'Product List';  
    imageWidth: number = 70;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = 'cart';
    products: any[]  = 
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

    toggleImage(): void {
      this.showImage = !this.showImage;
    }
}