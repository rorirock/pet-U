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

import { PetUService } from './services/pet-u.service';

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
  ],
  providers: [
    PetUService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
