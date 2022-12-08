import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutModule } from './about/about.module';
import { UserModule } from './user/user.module';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NavComponent } from './nav/nav.component';
import { FootComponent } from './foot/foot.component';
import { FormsModule } from '@angular/forms';
import { ProvidersModule } from './providers/providers.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    NotfoundComponent,
    NavComponent,
    FootComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutModule,
    UserModule,
    FormsModule,
    ProvidersModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
