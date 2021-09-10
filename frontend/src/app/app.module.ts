import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

//Templates
import { HeaderComponent } from '../components/template/header/header.component';
import { NavComponent } from '../components/template/nav/nav.component';
import { FooterComponent } from '../components/template/footer/footer.component';
//Views
import { HomeComponent } from './views/home/home.component';
import { RegistrationComponent } from './views/registration/registration.component';
import { ListComponent } from './views/list/list.component';

//Service
import { BankListService } from 'src/components/template/service/bankList/bank-list.service';

//Material Module
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    RegistrationComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
  ],
  providers: [HttpClientModule, BankListService ],
  bootstrap: [AppComponent],
})
export class AppModule {}
