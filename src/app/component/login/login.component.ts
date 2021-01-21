import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HubServiceService } from 'src/app/hub-service.service';
declare var $: any
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  user: any;
  error: any;
  sender: any = Number
  receiver: any = Number
  amount: any = Number
  constructor(private router: Router, private service: HubServiceService) { }

  ngOnInit() {
  }


  transfer() {
    var data = {
      sender: this.sender,
      receiver: this.receiver,
      amount: this.amount
    }
    this.service.postApi('transferFunds', data, 3).subscribe((res: any) => {
      this.router.navigate(['/profile'])
    })
  }

}
