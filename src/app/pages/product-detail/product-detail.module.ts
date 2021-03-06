import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteNavModule } from '../site-nav/site-nav.module';
import { ProductDetailRoutingModule } from './product-detail-routing.module';
import { FormsModule } from '@angular/forms';

import { ProductDetailComponent } from './product-detail.component';
import { HeaderComponent } from './header/header.component';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  imports: [
    CommonModule,
    ProductDetailRoutingModule,
    SiteNavModule,
    FormsModule
  ],
  declarations: [
    ProductDetailComponent,
    HeaderComponent,
    DetailComponent
  ]
})
export class ProductDetailModule { }
