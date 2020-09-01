import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterPetComponent } from './components/filter-pet/filter-pet.component';
import { InfoPetComponent } from './components/info-pet/info-pet.component';
import { HomePetComponent } from './components/home-pet/home-pet.component';

import { HttpClientModule } from '@angular/common/http';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table'; 
import {MatIconModule} from '@angular/material/icon';
import { PetUService } from './services/pet-u.service';
import { TokenService } from './services/token.service';

@NgModule({
  declarations: [
    AppComponent,
    FilterPetComponent,
    InfoPetComponent,
    HomePetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatGridListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTableModule,
    MatIconModule,
  ],
  providers: [
    PetUService,
    TokenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
