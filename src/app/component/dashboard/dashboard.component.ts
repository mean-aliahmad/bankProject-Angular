import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HubServiceService } from 'src/app/hub-service.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  amount:any=Number
  account_number:any=Number
  constructor(private router: Router, private service: HubServiceService) { }

  ngOnInit(): void {
  }

  addMoney(){
    var data={
      account_number:this.account_number,
      amount:this.amount
    }
    this.service.postApi('addMoney',data,3).subscribe((res:any)=>{
      console.log(res)
      this.router.navigate(['/profile'])
    })
  }

}
