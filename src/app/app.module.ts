import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AccueilComponent } from './accueil/accueil.component';
import { TableauComponent } from './tableau/tableau.component';
import { LocalisationComponent } from './localisation/localisation.component';
import { CourbeComponent } from './courbe/courbe.component';
import { JournalComponent } from './journal/journal.component';
import { AppRoutingModule } from './appRouting';
import { CourbeService } from './courbe/courbe.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    AccueilComponent,
    TableauComponent,
    LocalisationComponent,
    CourbeComponent,
    JournalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CourbeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
