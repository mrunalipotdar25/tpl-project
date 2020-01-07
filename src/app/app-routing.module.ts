import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', 
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
    
  },
  
  {
    path: 'index/:Name',
    loadChildren: () => import('./index/index.module').then( m => m.IndexPageModule)
  },

  {
    path: 'index',
    loadChildren: () => import('./index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: 'all-products',
    
    loadChildren: () => import('./all-products/all-products.module').then( m => m.AllProductsPageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then( m => m.ProductsPageModule)
        
  
  },

  {
    path:'pdetail/:productId',
    loadChildren: () => import('./product-detail/product-detail.module').then( m => m.ProductDetailPageModule)
  },
  
  {
    path: 'pricelist',
    loadChildren: () => import('./pricelist/pricelist.module').then( m => m.PricelistPageModule)
  },
  
  {
    path: 'vehicalmake',
    children:[
      {
        path:'',
        loadChildren: () => import('./vehicalmake/vehicalmake.module').then( m => m.VehicalmakePageModule)

      },
      {
        path: 'tatamotarsdetail/:VehicleId',
    
        children: [
          {
            path: '',
            loadChildren: () => import('./tatamotarsdetail/tatamotarsdetail.module').then( m => m.TatamotarsdetailPageModule)
          },
          {
            path: ':kbno',
            loadChildren: () => import('./tatalptdetail/tatalptdetail.module').then( m => m.TatalptdetailPageModule)
          }
        ]
      
      }
    ]
    
  },
 
  {
       path: 'vehicalmake1',
        children: [
        {
           path: '',
           loadChildren: () => import('./vehicalmake/vehicalmake.module').then( m => m.VehicalmakePageModule)
         },
  
        {
          path:'tatamotarsdetail/:VehicleId',
          children: [
          {
              path:'',
              loadChildren: () => import('./tatamotarsdetail/tatamotarsdetail.module').then( m => m.TatamotarsdetailPageModule)
          },
  
          {
            path:':kbno',
            children:[{
                   path:'',
                   loadChildren: () => import('./vehical-by-price/vehical-by-price.module').then( m => m.VehicalByPricePageModule)
                 }]
              
         }
           ]
        
         }
       ]
     },
 
    //  {
    //   path: 'detailvehicle/:kbno',
    //   loadChildren: () => import('./tatalptdetail/tatalptdetail.module').then( m => m.TatalptdetailPageModule)
    // },
  {
    path: 'allpricelist',
    loadChildren: () => import('./allpricelist/allpricelist.module').then( m => m.AllpricelistPageModule)
  },
  {
    path: 'producttypeprice',
    loadChildren: () => import('./producttypeprice/producttypeprice.module').then( m => m.ProducttypepricePageModule)
  },
  {
    path: 'vehical-by-price',
    loadChildren: () => import('./vehical-by-price/vehical-by-price.module').then( m => m.VehicalByPricePageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
