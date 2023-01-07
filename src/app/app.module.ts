import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { RouterModule } from '@angular/router';
import { DisplayProductComponent } from './display-product/display-product.component';
import { EndComponent } from './end/end.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'shopping-cart/:name/:price/:desc/:img',
        component: ShoppingCartComponent,
      },
      { path: 'display-product', component: DisplayProductComponent },
      { path: 'end', component: EndComponent },
      { path: '', redirectTo: '/display-product', pathMatch: 'full' },
    ]),
  ],

  declarations: [
    AppComponent,
    ProductListComponent,
    ProductComponent,
    ShoppingCartComponent,
    DisplayProductComponent,
    EndComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
