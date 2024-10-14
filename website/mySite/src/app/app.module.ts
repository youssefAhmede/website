import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ProductsComponent } from './products/products.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    DashboardComponent,
    LoginComponent,
    LogoutComponent,
    ProductsComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  //Dr Ahmed
    ReactiveFormsModule  //Dr Ahmed
  ],
  providers: [provideHttpClient()], //Dr Ahmed 
  bootstrap: [AppComponent]
})
export class AppModule { }
