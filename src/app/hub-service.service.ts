import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { NgxSpinnerService } from "ngx-spinner";



@Injectable({
  providedIn: 'root'
})
export class HubServiceService {

  // baseUrl= "http://172.16.6.162:2000/api/v1/user/"
  // baseUrl= "http://192.168.31.253:3000/api/"


  constructor(private http:HttpClient) { }

  baseUrl= "http://192.168.31.253:3000/api/"
  // postApi(url, data,header){
  //   return this.http.post(url,data,header);
  // }
  // getApi(url,header){
  //   return this.http.get(url,header);
  // }

// post api ---------------------
postApi(url, data, Header) {
  if (Header == 1) {
    var httpOptions;
    httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "token":localStorage.getItem('token')
      }), observe: 'response'
    }
  } else if (Header == 2) { // formData header == 2 
    var httpOptions;
    httpOptions = {
      headers: new HttpHeaders({
        "Authorization": localStorage.getItem('token')
      }), observe: 'response'
    }
  }
  else if (Header == 3) { // formData header == 3
    var httpOptions;
    httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }), observe: 'response'
    }
  }
  else {
    var httpOptions;
    httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }), observe: 'response'
    }
  }
  return this.http.post((this.baseUrl+ url), data, httpOptions)

}
getApi(url, isHeader) {
  if (isHeader == 1) {
    var httpOptions;
    httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "token": localStorage.getItem('token')
      }), observe: 'response'
    }
  }
  else if (isHeader == 2) {
    var httpOptions;
    httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }), observe: 'response'
    }
  }
  else {
    var httpOptions;
    httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }), observe: 'response'
    }
  }
  return this.http.get((this.baseUrl + url), httpOptions)
}
// put api 
putApi(url,data:any): Observable<any>{
  var httpOptions;
  httpOptions={
    headers: new HttpHeaders({
      // "Content-Type": "application/json",
      "Authorization": localStorage.getItem('token')
    }),observe: 'response'
  }
  return this.http.put(this.baseUrl + url,data,httpOptions)
}

// Delete Api 
deleteApi(url) {
  var httpOptions;
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": localStorage.getItem('token')
    }), observe: 'response'
  }
  return this.http.delete(this.baseUrl + url, httpOptions);
}

// showSpinner() {
//   this.spinner.show();
// }

// hideSpinner() {
//   // setTimeout(() => {
//   //     /** spinner ends after 5 seconds */
//   //     this.spinner.hide();
//   //   }, ); 
//   this.spinner.hide();
// }
}
