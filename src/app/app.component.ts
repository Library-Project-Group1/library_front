import {Component, OnInit} from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'library-front';

  constructor(private http: HttpClient) {
    this.title = 'My Library connected';
  }

  ngOnInit() {
  }


}
