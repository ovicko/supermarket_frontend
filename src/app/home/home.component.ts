import { Component, OnInit } from '@angular/core';
import { SupermarketService } from '../supermarket.service';
import { SupermarketModel } from '../models/supermarket-model.model';
import { Observable, catchError, throwError } from 'rxjs';
import * as $ from 'jquery'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  supermarkets : SupermarketModel[] = [];
  selectedSupermarket: SupermarketModel;

  constructor(public supermarketService: SupermarketService) { 
  }

  ngOnInit() {
    this.supermarketService.getSupermarkets().subscribe((response : any[])=>{
       this.supermarkets = response['supermarkets'];
    });

    $(document).on('click', '.btn-grid', this.gridList);
    $(document).on('click', '.btn-list', this.showList);
      

  }
  public selectSupermarket(supermarket:SupermarketModel){
    this.selectedSupermarket = supermarket;
  }

  private showList(e) {
    var $gridCont = $('.grid-container');
    e.preventDefault();
    $gridCont.hasClass('list-view') ? $gridCont.removeClass('list-view') : $gridCont.addClass('list-view');
  }
  private gridList(e) {
    var $gridCont = $('.grid-container')
    e.preventDefault();
    $gridCont.removeClass('list-view');
  }
  

}
