import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component'

import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './views/home/home.component'
import { MatCardModule } from '@angular/material/card';
import { LivroCrudComponent } from './views/livro-crud/livro-crud.component';
import { UtilizadorCrudComponent } from './views/utilizador-crud/utilizador-crud.component'
import { MatButtonModule } from '@angular/material/button';
import { AdicionarLivroComponent } from './components/livro/adicionar-livro/adicionar-livro.component'
import { LivroService } from './components/livro/livro.service'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    LivroCrudComponent,
    UtilizadorCrudComponent,
    AdicionarLivroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MatToolbarModule, 
    MatSidenavModule, 
    MatListModule, 
    MatCardModule, 
    MatButtonModule, 
    MatSnackBarModule, 
    HttpClientModule
  ],
  providers: [LivroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
