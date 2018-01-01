import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public searchForm : FormGroup;

  constructor() { }

  ngOnInit() {
    this.searchForm = new FormGroup({});
  }

}
