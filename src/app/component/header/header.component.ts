import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HubServiceService } from 'src/app/hub-service.service';
declare var $:any
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  url: any;
  token: string;
  profile: any;
  constructor(private route: ActivatedRoute, private router: Router, private service: HubServiceService) {
    // if(!this.url){
    //   this.url = '/' + route['children'][0].url['value'][0].path;
    // }
  }
  ngOnInit(){
    this.token = localStorage.getItem('token')
    this.getProfile()
  }
  getProfile() {
    this.service.getApi('myProfile', 1).subscribe((res: any) => {
      this.profile = res.body.result
      console.log('this.profile',this.profile)
    })
  }

  logout(){
    localStorage.clear()
  }

}
