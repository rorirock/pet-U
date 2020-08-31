import { Component, OnInit } from '@angular/core';
import { PetUService } from '../../services/pet-u.service';



@Component({
  selector: 'app-home-pet',
  templateUrl: './home-pet.component.html',
  styleUrls: ['./home-pet.component.css']
})
export class HomePetComponent implements OnInit {
  typePet:any[]=[];

  constructor(private getTypePet:PetUService) { 

    //this.typePet = getTypePet.getTypePet();

    console.log();
  }
   
  
  ngOnInit(): void {
    this.getTypePet.getTypePet().subscribe(data => console.log("data ++"+data),
     error => {
       console.log("error ++"+error);
      });

  }

}
