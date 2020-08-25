import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { AboutComponent } from './pages/about/about.component';
// import { ContactoComponent } from './pages/contacto/contacto.component';
// import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './components/menu/menu.component';
import { PagesModule } from './pages/pages.module';
// import para importar servicios desde http
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
   // AboutComponent,
    // ContactoComponent,
    // HomeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
