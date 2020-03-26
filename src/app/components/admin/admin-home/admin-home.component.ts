import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  links = [
    {title: 'AddProduct', fragment: ''}
  ];

  constructor(public route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

}


