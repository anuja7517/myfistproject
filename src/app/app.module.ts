import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { productsComponent } from './components/products/products.component';
import { FormsModule } from '@angular/forms';
import { SkillssetComponent } from './components/skillsset/skillsset.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    productsComponent,
    SkillssetComponent

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
