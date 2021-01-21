import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HubServiceService } from 'src/app/hub-service.service';
@Component({
  selector: 'app-terms-and-condition',
  templateUrl: './terms-and-condition.component.html',
  styleUrls: ['./terms-and-condition.component.css']
})
export class TermsAndConditionComponent implements OnInit {
  terms: any;
  name:any
  email:any
  mobileNumber:any=Number
  account_number:any=Number

  constructor(private router: Router, private service: HubServiceService) { }

  ngOnInit() {
  }

  getTermsAndCondition() {
    var data={
      'name': this.name,
      'email': this.email,
      'mobileNumber': this.mobileNumber,
      'account_number': this.account_number   }
    this.service.postApi('addCustomer',data, 3).subscribe((res: any) => {
console.log(res)
if(res.status==200){
  this.router.navigate(['/profile'])
}
else alert('Error in adding customer')
      // this.terms=res.body.result.description
    // console.log(this.terms)
    
    })
  }


}
