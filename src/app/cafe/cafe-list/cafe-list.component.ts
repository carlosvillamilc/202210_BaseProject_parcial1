import { Component, OnInit } from '@angular/core';

import { Cafe } from '../cafe';
import { CafeService } from '../cafe.service';

@Component({
  selector: 'app-cafe-list',
  templateUrl: './cafe-list.component.html',
  styleUrls: ['./cafe-list.component.css']
})
export class CafeListComponent implements OnInit {
  cafes: Array<Cafe> = [];

  constructor(private cafeService: CafeService) { }

  getCafes(): void{
    this.cafeService.getCafes().subscribe(cafes=>{
      this.cafes=cafes;
    });
  }

  sumaTipoCafe(tipoCafe:string):number{
    let total= 0;
    for(let i = 0;i<this.cafes.length;i++){
      if(this.cafes[i].tipo==tipoCafe){
        total++;
      }
    }
    return total;
  }

  ngOnInit() {
    this.getCafes();
  }

}
