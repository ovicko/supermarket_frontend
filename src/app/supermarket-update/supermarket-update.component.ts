import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SupermarketModel } from '../models/supermarket-model.model';
import { SupermarketService } from '../supermarket.service';
@Component({
  selector: 'app-supermarket-update',
  templateUrl: './supermarket-update.component.html',
  styleUrls: ['./supermarket-update.component.css']
})
export class SupermarketUpdateComponent implements OnInit {
  supermarketId = this.route.snapshot.paramMap.get('id');
  supermarket:SupermarketModel;


  constructor(
    private route: ActivatedRoute,
    private router: Router,private service:SupermarketService  ) {}

    ngOnInit() {
      this.service.getSupermarketById(this.supermarketId).subscribe((response : SupermarketModel)=>{
        this.supermarket = response;
  
      });
    }

    // Update supermarket data
    public updateSupermarket() {
      if(window.confirm('Are you sure, you want to update?')){
        this.service.updateSupermarket (this.supermarketId, this.supermarket).subscribe(data => {
          this.router.navigate(['/home'])
        })
      }
    }
  
}
