import { Component, OnDestroy, OnInit } from "@angular/core";
@Component({
    selector : "app-product",
     // selector : "[app-product]",
     //selector : ".app-product",

    templateUrl : "./product.component.html",
   //template : '<p> This is product <strong> {{productName}} </strong> with id<strong>{{productId}}</strong></p>',
    styleUrls  : ['./product.component.scss']
   //  styles :[`
   //                   p{
   //          padding: 20px;
   //          border: 1px solid #ededed;
   //          background-color: #eee;
   //                   
   //           }
   // 
   // `]
})

  export class ProductComponent  implements OnInit, OnDestroy{
    productName : string = "Samsung M31";
    productId  :string  = "p-123";
    productStatus : string = "Dispatched";
    res  : string = `<strong> I LOVE Angular</strong>`
    isProductAvaible !:boolean;

    ngOnInit(): void {
      console.log( `The product component is INIT`)
      this.isProductAvaible = Math.random() >=.5 ? true :false;
      console.log(this.isProductAvaible);
    }

      ngOnDestroy(): void {
        
      }
}