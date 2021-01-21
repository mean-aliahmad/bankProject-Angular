import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HubServiceService } from 'src/app/hub-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
declare var $:any;
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  error: any;

  constructor(private router:Router,private service:HubServiceService) { }

  ngOnInit() {
    this.details()
  }
  
  details(){
    this.signupForm=new FormGroup({
      'name': new FormControl('',Validators.required),
      'email': new FormControl('',Validators.required),
      'password': new FormControl('',Validators.required),
      'cnfmpassword': new FormControl('',Validators.required)
    })
  }

  signUp(){
    var data={
      'name': this.signupForm.value.name,
      'email': this.signupForm.value.email,
      'password': this.signupForm.value.password,
      'confirmPassword': this.signupForm.value.cnfmpassword
    }
    this.service.postApi('signUp',data,3).subscribe((res:any)=>{
if(res.body.response_code==200){
  console.log("RESPONSE",res)
  $('#activityModal').modal('show')
  this.error=res.body.response_message
  setTimeout(() => {
    this.router.navigate(['login'])
    $('#activityModal').modal('hide')
  }, 3000);
  
}
else{
  $('#activityModal').modal('show')
  this.error=res.body.response_message
  console.log("I am here in bad request")
}
    })
  }
}
