import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { productsComponent } from './components/products/products.component';
import { FormsModule } from '@angular/forms';
import { SkillssetComponent } from './components/skillsset/skillsset.component';
import { StdTableComponent } from './components/std-table/std-table.component';
import { TabComponent } from './tab/tab.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    productsComponent,
    SkillssetComponent,
    StdTableComponent,
    TabComponent

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
