import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {RestService} from '../rest.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  Users: any;
  splash = true;
  Name:any;
  Mobile:any;
  Email:any;
  select:any;
  dataFromService :any =[];

  constructor(private router: Router,public restProvider:RestService,public route: ActivatedRoute) {

  }

 
  goto()
  {
    this.router.navigate(['/index']);
  }

  gonext()
  {
    this.router.navigate(['/index']);
  }
  ionViewDidLoad()
  {
    setTimeout(() => this.splash = false, 1000);
  }

  ngOnInit()
  {this.ionViewDidLoad();
  }

  postmethod()
  {
    let myDate: Date = new Date();
    console.log('date',myDate);
    var userData = {Name:this.Name,Mobile:this.Mobile,Email:this.Email,UserType:this.select,DateOfRegistration:myDate};
    this.restProvider.postuser(userData).subscribe((dataReturnFromService)=>{
      this.dataFromService = JSON.stringify(dataReturnFromService);
    });
  }
}
