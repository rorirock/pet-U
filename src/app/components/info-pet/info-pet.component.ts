import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PetUService } from '../../services/pet-u.service';

@Component({
  selector: 'app-info-pet',
  templateUrl: './info-pet.component.html',
  styleUrls: ['./info-pet.component.css']
})
export class InfoPetComponent implements OnInit {
  id:any;
  generalInfo: any;
  constructor(public dialogRef: MatDialogRef<InfoPetComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private getTypePet: PetUService) { }

  ngOnInit(): void {
   this.id = this.data;
   this.getTypePet.getInfoPet(this.id.id);
   this.getTypePet.info.subscribe((data) => {
    this.generalInfo = data.animal;
    console.log("INFO: "+JSON.stringify(this.generalInfo));
   });
   
  }

}
