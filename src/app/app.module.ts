import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterPetComponent } from './components/filter-pet/filter-pet.component';
import { InfoPetComponent } from './components/info-pet/info-pet.component';
import { HomePetComponent } from './components/home-pet/home-pet.component';

import { HttpClientModule } from '@angular/common/http';

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
  ],
  providers: [
    PetUService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
