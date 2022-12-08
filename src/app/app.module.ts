import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
/*import { BrowserAnimatonsModule } from '@angular/platform-browser/animations';*/

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { ChartComponent } from './chart/chart.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import{MatInputModule} from '@angular/material/input'
import { HelpsComponent } from './helps/helps.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    LeftMenuComponent,
    HomeComponent,
    ChartComponent,
    NotFoundComponent,
    HelpsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    /*BrowserAnimationsModule,*/
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
