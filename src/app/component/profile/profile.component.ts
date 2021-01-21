import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HubServiceService } from 'src/app/hub-service.service';
import { FormGroup, FormControl } from '@angular/forms';
declare var $: any
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileName: any;
  profile: any;
  editForm: FormGroup;
  media_type: any;
  files: any = [];
  data: any[];
  fileName1: any;
  filepath: any;
  customers: any[];

  constructor(private router: Router, private service: HubServiceService) { }

  ngOnInit() {
   this.listOfCustomers()
  }

  listOfCustomers() {
    this.service.getApi('list',3).subscribe((res: any) => {
      console.log(res)
      this.customers=(res.body.result)
    })
  }
  detail() {
    this.editForm = new FormGroup({
      'name': new FormControl(''),
      'email': new FormControl(''),
      'password': new FormControl(''),
      'cnfmPassword': new FormControl('')
    })
  }

  getProfile() {
    this.service.getApi('myProfile', 1).subscribe((res: any) => {
      this.profileName = (res.body.result.name).toUpperCase()
      this.profile = res.body.result
      this.editForm.patchValue({
        name: this.profile.name,
        email: this.profile.email
      })
    })
  }

  handleFileInput(event) {
    console.log('event', event)
    this.filepath = event.target.value
    if (event.target.files && event.target.files[0]) {
      this.media_type = event.target.files[0].type;
      console.log('this.media_type', this.media_type)
      let mb = 1000000;
      let size = ((event.target.files[0]['size']) / mb)
      if (this.media_type === 'video/mp4' || this.media_type === 'video/mov' || this.media_type === 'video/flv') {
        if (size <= 50) {
          for (var i = 0; i < event.target.files.length; i++) {
            this.files.push(event.target.files[i])
            console.log('this.files', this.files)
            console.log('tevent.target.files[i]', event.target.files[i])
            // this.data.push(event.target.files[i].type)
          }
        } else if (this.media_type === 'image/png' || this.media_type === 'image/jpg' || this.media_type === 'image/jpeg') {
          if (size <= 10) {
            this.files = []
            this.data = []
            for (var i = 0; i < event.target.files.length; i++) {
              this.files.push(event.target.files[i])
              console.log('this.files', this.files)
              console.log('tevent.target.files[i]', event.target.files[i])
              // this.data.push(event.target.files[i].type)
            }
          }
        }
      }
    }
  }

  editProfile() {
    var data = {
      "profilePic": this.filepath,
      'name': this.editForm.value.name,
      'email': this.editForm.value.email,
      'password': this.editForm.value.password,
      'confirmPassword': this.editForm.value.cnfmPassword
    }
    console.log("sdksdksdjksd", typeof this.filepath)
    this.service.postApi('editProfile', data, 1).subscribe((res: any) => {
      if (res.status == 200) {
        this.router.navigate(['/dashboard'])
      }
    })
  }
}

