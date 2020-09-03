import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-pet',
  templateUrl: './home-pet.component.html',
  styleUrls: ['./home-pet.component.css'],
})
export class HomePetComponent implements OnInit {
  filterpage: boolean =false;
  welcomepage: boolean =true;
  constructor() {}

  ngOnInit(): void { }

  selectFilter(){
    this.filterpage = true;
    this.welcomepage=false;
  }

  selectHome(){
    this.filterpage = false;
    this.welcomepage=true;
  }


}
