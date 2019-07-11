import { Injectable } from "@angular/core";
import { IProduct } from "./product";

@Injectable({
    providedIn: 'root'
})

export class ProductService {

    getProducts(): IProduct[]{
        return [
            {
                "productId": 1,
                "productName": "Leaf Rake",
                "productCode": "GDN-0011",
                "releaseDate": "March 19, 2016",
                "description": "Leaf rake with 48-inch wooden handle.",
                "price": 19.95,
                "starRating": 3.2,
                "imageUrl": "data:image/jpeg;base64,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bEMOZ3fqlaPkp/lT9LDv+4P7sRKd8iIq0IiICIiAiIgIiICIiAiIgIiICIiAiIgIiINMtMxzZGkACQEOtYE3Fie+yqafAhBR1NNG4ybRsmXNYG72ZQCR28VeIg5bAKGWHDaiKZhjeBNobHQs3gjhvWjyZRtbRy5Rb6dx/QxdeRfQ6grRS0cUQcImNjDjmIaA0ZrAXsO4IOC8k1FkfXyE3L3R/vIT+619HQ9/SOteb5GNkt3t2cY+a63o1gHmW2Ak2jZC0jTKRa+h113qq6NUErMSrpJI3sa/aFriDZwdLcWO7cAolKTp1MHY3h0Nr32GvK87v5Kf5T9ZcMbxNQf70Q+a04tTtl6QQXFzGY/0sMnzW7pPTmqxrD4m6sprSuHI3Ehv4MZ+ZB3qIiqiIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiCE7CoDOKnZt24/rBcH0cuttDppqouGYGIamoqS8yPnOlwBkbe5bfjub+UK3RAREQEREBERAREQEREBERAREQEREBERAREQEREBERAWFlEBERAREQFhZRAREQEREGFlEQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBYCIgyiIgIERAREQEREBERB/9k="
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
              },
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
                "productId": 8,
                "productName": "Saw Mask",
                "productCode": "TBX-0022",
                "releaseDate": "May 15, 2016",
                "description": "15-inch steel blade hand saw",
                "price": 11.55,
                "starRating": 3.7,
                "imageUrl": "https://www.dhresource.com/0x0s/f2-albu-g6-M00-AE-F7-rBVaR1tSnFGAAJ2OAAFRkr0xwaQ648.jpg/pel-cula-saw-dibujos-animados-horror-resina.jpg"
              },
              {
                "productId": 10,
                "productName": "Video Game Controller",
                "productCode": "GMG-0042",
                "releaseDate": "October 15, 2015",
                "description": "Standard two-button video game controller",
                "price": 35.95,
                "starRating": 4.6,
                "imageUrl": "https://images.techhive.com/images/article/2014/08/dualshock4-100409190-large.jpg"
              }
        ]
    }
}