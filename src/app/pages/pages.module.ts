import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AboutComponent,
    ContactoComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
     ],
  exports: [
    AboutComponent,
    ContactoComponent,
    HomeComponent
  ] // exportamos a toda a aplicacion
})
export class PagesModule { }
