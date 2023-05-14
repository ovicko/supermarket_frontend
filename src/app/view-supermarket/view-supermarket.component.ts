import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { SupermarketModel } from '../models/supermarket-model.model';
import { SupermarketService } from '../supermarket.service';

@Component({
  selector: 'app-view-supermarket',
  templateUrl: './view-supermarket.component.html',
  styleUrls: ['./view-supermarket.component.css']
})
export class ViewSupermarketComponent {
  supermarket:SupermarketModel;
  supermarketId = this.route.snapshot.paramMap.get('id')


  constructor(
    private route: ActivatedRoute,
    private router: Router,private service:SupermarketService  ) {}

    ngOnInit() {
      this.service.getSupermarketById(this.supermarketId).subscribe((response : SupermarketModel)=>{
        this.supermarket = response;
  
      });
    }

    public deleteSupermarket(supermarketId:any){
      if (window.confirm('Are you sure, you want to delete?')) {
        this.service.deleteSupermarketById(supermarketId).subscribe((data) => {
          this.router.navigate(['/home'])
        });
      }
      
    }
}
