import { Component, OnInit } from '@angular/core';
import {BookingDataService} from '../service/booking-data.service';
import {HeaderComponent} from '../header/header.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [BookingDataService]
})
export class HomeComponent implements OnInit {
  data = [];
  i = 1;
  constructor(private dataService: BookingDataService) { }

  ngOnInit() {
    this.dataService.getData().subscribe((data) => {
      console.log('what is in the data' , data);
      this.data = data;
    });
  }

  getColor() {
    // console.log(this.i);
    this.i++;
    // setTimeout(function(){
      return '#'+ 'ccccc' +(Math.floor((Math.random() * 9)) + 1);      
    // }, 0);
  }
}

