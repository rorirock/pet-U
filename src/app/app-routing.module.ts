import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { FilterPetComponent } from './components/filter-pet/filter-pet.component';
import { HomePetComponent } from './components/home-pet/home-pet.component';

const routes: Routes = [
  { path: '', component: HomePetComponent },
  { path: 'filters',  component: FilterPetComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
