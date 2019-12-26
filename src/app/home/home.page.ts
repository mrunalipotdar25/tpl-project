import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

 
  splash = true;
  


  constructor(private router: Router) {

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
  {
    this.ionViewDidLoad();
  }

}
