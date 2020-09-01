import { Component, OnInit } from '@angular/core';
import { PetUService } from '../../services/pet-u.service';


@Component({
  selector: 'app-filter-pet',
  templateUrl: './filter-pet.component.html',
  styleUrls: ['./filter-pet.component.css']
})
export class FilterPetComponent implements OnInit {

  displayedColumns: string[] = ['specie', 'name', 'tag'];
  response:any;
  responseRace:any;
  TypesPet:any = [];

  constructor(private getTypePet:PetUService) {  }

  ngOnInit(): void {
    this.getTypePet.getTypePet();
    this.getTypePet.types.subscribe((data) => {
    this.response = data;
    this.TypesPet = this.response.types;
     
    });
  }

  RacePet(type): void {
    this.getTypePet.getRacePet(type);
    console.log("RESPUESTA DEL SERVER "+JSON.stringify(this.getTypePet.Breeds));
  }

}
