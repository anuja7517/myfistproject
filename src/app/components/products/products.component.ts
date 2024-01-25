import { Component, OnInit } from "@angular/core";




@Component({
    selector : "app-products",
    templateUrl :"./products.component.html",
    styleUrls  :['./products.component.scss']

})

export class productsComponent implements OnInit {
    isDisabled : boolean = true;
    cartProductStatus : string = `No product is added to the card.`
    noOfProductsAdded : number = 0;
    searchedProduct  : string  = 'No product Is Searched Yet !!!'

    ngOnInit(): void {
        setTimeout(() => {
            this.isDisabled = false;
        }, 3000);
    }
    updatecartStatus(){
        console.log(`Clicked !!!`);
        this.noOfProductsAdded++;
        this.cartProductStatus = `${this.noOfProductsAdded}product are added to the add cart !!!`
    }
    onProductSearch(eve:Event){
        let val = (eve.target as HTMLInputElement).value;
        console.log(val);
        this.searchedProduct = val;

    }

}