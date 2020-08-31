import { Component, OnInit } from '@angular/core';
import { PetUService } from '../../services/pet-u.service';


@Component({
  selector: 'app-filter-pet',
  templateUrl: './filter-pet.component.html',
  styleUrls: ['./filter-pet.component.css']
})
export class FilterPetComponent implements OnInit {

  constructor(private getTypePet:PetUService) { }

  ngOnInit(): void {
  }

}
