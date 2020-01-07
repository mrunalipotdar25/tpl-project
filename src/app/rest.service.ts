import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  postmethod(userData: { Name: any; Mobile: any; Email: any; UserType: any; DateOfRegistration: Date; }) {
    throw new Error("Method not implemented.");
  }

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

   getCompany(VehicleId: Number)
   {
      return new Promise(resolve=>{
        this.http.get(this.apiUrl+'/Companies?id= '+VehicleId+'').subscribe(data=>{
          resolve(data);
        },err=>{
          console.log(err);
        });
      });
   }

   getUser(userId: Number)
   {
      return new Promise(resolve=>{
        this.http.get(this.apiUrl+'/Users?id= '+userId+'').subscribe(data=>{
          resolve(data);
        },err=>{
          console.log(err);
        });
      });
   }


   getproductbyVehicle(kbno: string)
   {
    return new Promise(resolve=>{
      this.http.get(this.apiUrl+'/ProductsByVehicle?kbno='+kbno).subscribe(data=>{
        resolve(data);
      },err=>{
        console.log(err);
      });
    });
   }

   getPriceVehicle(kb: string)
   {
    return new Promise(resolve=>{
      this.http.get(this.apiUrl+'/ProductsByVehicle?kbno='+kb).subscribe(data=>{
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

   VehicleName(vehicleId: Number)
   {
    return new Promise(resolve=>{
      this.http.get(this.apiUrl+'/VehicleName?id='+vehicleId+'').subscribe(data=>{
        resolve(data);
      },err=>{
        console.log(err);
      });
    });

   }
   getVehical()
   {
      return new Promise(resolve=>{
        this.http.get(this.apiUrl+'/Vehicals').subscribe(data=>{
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


   postuser(userData)
   {
    return this.http.post(this.apiUrl+'/Users',userData,{headers:new HttpHeaders({"Content-Type":"application/JSON"})});
   }

   productprice(pid:number,ptype: string)
   {
    return new Promise(resolve=>{
      this.http.get(this.apiUrl+'/ProductCategory'+pid+' & '+ptype+'').subscribe(data=>{
        resolve(data);
      },err=>{
        console.log(err);
      });
    });
   }

 getcat(ptype: string)
   {
    return new Promise(resolve=>{
      this.http.get(this.apiUrl+'/ProductCategory?type='+ptype+'').subscribe(data=>{
        resolve(data);
      },err=>{
        console.log(err);
      });
    });
   }

   getCategeory()
   {
    return new Promise(resolve=>{
      this.http.get(this.apiUrl+'/ProductCategory').subscribe(data=>{
        resolve(data);
      },err=>{
        console.log(err);
      });
    });
   }

   getType(VehicleId:Number,Vtype:String)
   {
     return new Promise(resolve=>{
      this.http.get(this.apiUrl+'/VehicalType?id='+VehicleId+' &type='+Vtype+' ').subscribe(data=>{
        resolve(data);
      },
      err=>{
        console.log(err);
      });
     });
   }

  /* searchpage(pId:Number)
   {
    return new Promise(resolve=>{
      this.http.get(this.apiUrl+'/searchpage?id='+pId+'').subscribe(data=>{
        resolve(data);
      },err=>{
        console.log(err);
      });
    });

   }

   searchpag1()
   {
    return new Promise(resolve=>{
      this.http.get(this.apiUrl+'/searchpage').subscribe(data=>{
        resolve(data);
      },err=>{
        console.log(err);
      });
    });
  }*/
}
