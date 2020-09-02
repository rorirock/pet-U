import { Component, OnInit } from '@angular/core';
import { PetUService } from '../../services/pet-u.service';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {InfoPetComponent} from '../info-pet/info-pet.component';

@Component({
  selector: 'app-filter-pet',
  templateUrl: './filter-pet.component.html',
  styleUrls: ['./filter-pet.component.css'],
})
export class FilterPetComponent implements OnInit {
  myControl = new FormControl();
  displayedColumns: string[] = ['specie', 'name', 'size','info'];
  response: any;
  responseRace: any;
  responseTags: any;
  typesPet: any = [];
  typesBreeds: any = [];
  typesTags = [];
  selectBreed: any;
  selectType: any;
  filteredOptions: Observable<string[]>;
  listPets:any=[];
  constructor(private getTypePet: PetUService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getTypePet.getTypePet();
    this.getTypePet.types.subscribe((data) => {
      this.response = data;
      this.typesPet = this.response.types;
    });
  }

  RacePet(type): void {
    this.selectType = type;
    this.getTypePet.getRacePet(type);
    this.getTypePet.breeds.subscribe((data) => {
      this.responseRace = data;
      this.typesBreeds = this.responseRace.breeds;
    });
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.typesBreeds.filter((option) =>
      option.name.toLowerCase().includes(filterValue)
    );
  }

  tagsPet() {
    this.getTypePet.getTagPet(this.selectType, this.selectBreed);
    this.getTypePet.tags.subscribe((data) => {
      this.responseTags = data;
      this.responseTags.animals.forEach((animal) => {
        Array.prototype.push.apply(this.typesTags, animal.tags);
      });
    });
  }

  getPets(){
    this.getTypePet.getTagPet(this.selectType, this.selectBreed);
    this.getTypePet.tags.subscribe((data) => {
      this.listPets = data.animals;
    });
  }

  info(id){
    const dialogRef = this.dialog.open(InfoPetComponent,{width: "60%", height:"60%",data: {id: id}});
  }
}

