import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  apiUrl='http://localhost:57654/api';

 
  constructor(public http:HttpClient) 
  {
    //this.getProduct();
    this.Companypage();
    this.userpage();
    //this.getprod();
   }

   getProduct(productId: Number)
   {
      return new Promise(resolve=>{
        this.http.get(this.apiUrl+'/Products?id= '+productId+'').subscribe(data=>{
          resolve(data);
        },err=>{
          console.log(err);
        });
      });
   }

   getproductbyVehicle(kbno: string)
   {
    return new Promise(resolve=>{
      this.http.get(this.apiUrl+'/ProductsByVehicle?KB_Part_No= '+kbno+'').subscribe(data=>{
        resolve(data);
      },err=>{
        console.log(err);
      });
    });
   }
   getprod()
   {
      return new Promise(resolve=>{
        this.http.get(this.apiUrl+'/Products').subscribe(data=>{
          resolve(data);
        },err=>{
          console.log(err);
        });
      });
   }

   getvehi(vehicleId: Number)
   {
      return new Promise(resolve=>{
        this.http.get(this.apiUrl+'/Vehicals?id='+vehicleId+'').subscribe(data=>{
          resolve(data);
        },err=>{
          console.log(err);
        });
      });
   }
   getVehical()
   {
      return new Promise(resolve=>{
        this.http.get(this.apiUrl+'/Vehicles').subscribe(data=>{
          resolve(data);
        },err=>{
          console.log(err);
        });
      });
   }
   
   Companypage()
   {
    return new Promise(resolve=>{
      this.http.get(this.apiUrl+'/Companies').subscribe(data=>{
        resolve(data);
      },err=>{
        console.log(err);
      });
    });
   }

 
   userpage()
   {
    return new Promise(resolve=>{
      this.http.get(this.apiUrl+'/Users').subscribe(data=>{
        resolve(data);
      },err=>{
        console.log(err);
      });
    });
   }
}
