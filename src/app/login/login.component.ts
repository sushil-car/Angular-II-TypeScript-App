import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {BookingDataService} from '../service/booking-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [BookingDataService]
})

export class LoginComponent {
  public myForm : FormGroup;
  public submitted : boolean;
  public events : any[] = [];
  title = 'app';

  //  constructor(private _fb: FormBuilder) { }
  constructor(private bookingDataService: BookingDataService) {
  }

  ngOnInit() {
    this.submitted = false;
    this.myForm = new FormGroup({
      bookingCode: new FormControl('', [ < any > Validators.required, < any > Validators.minLength(5), < any > Validators.maxLength(6)
      ]),
      familyName: new FormControl('', [ < any > Validators.required, < any > Validators.minLength(2), < any > Validators.maxLength(30),
      Validators.pattern('^[a-zA-Z ]+')
      ])
    });
  }

  getBookingStatus(model : {}) {
    this.submitted = true;
    var t = this.bookingDataService.getData().subscribe((data) => {
      console.log("what is in the data ", data);
      // this.myjsondata = data;
    });
    console.log(model);
  }

}
