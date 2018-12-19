import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  
  id: number;

  constructor( private route: ActivatedRoute) {
   }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');

    console.log('id is now ' + this.id);
  }


}
