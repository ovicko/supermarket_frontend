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

  constructor(
    private route: ActivatedRoute,
    private router: Router,private service:SupermarketService  ) {}

    ngOnInit() {
      const supermarketId = Number(this.route.snapshot.paramMap.get('id'));
      this.supermarket = this.service.getSupermarketById(supermarketId);
    }

}
