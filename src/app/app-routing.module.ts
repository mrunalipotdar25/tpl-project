import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
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

   /*children:[
     {
       path: '',
       loadChildren: () => import('./products/products.module').then( m => m.ProductsPageModule)
     },
     {
       path:':productId',
       loadChildren: () => import('./product-detail/product-detail.module').then( m => m.ProductDetailPageModule)
     }
   ]*/
        
  
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
    loadChildren: () => import('./vehicalmake/vehicalmake.module').then( m => m.VehicalmakePageModule)
    /*children:[
      {
        path: '',
        loadChildren: () => import('./vehicalmake/vehicalmake.module').then( m => m.VehicalmakePageModule)
      },*/
     /* {
        path: ':VehicleId',
        loadChildren: () => import('./tatamotarsdetail/tatamotarsdetail.module').then( m => m.TatamotarsdetailPageModule)
      }
    ]*/
  
  },
  {
    path: 'tatamotarsdetail/:VehicleId',
    loadChildren: () => import('./tatamotarsdetail/tatamotarsdetail.module').then( m => m.TatamotarsdetailPageModule)

   /* children: [
      {
        path: '',
        loadChildren: () => import('./tatamotarsdetail/tatamotarsdetail.module').then( m => m.TatamotarsdetailPageModule)
      },
      {
        path: ':kbno',
        loadChildren: () => import('./tatalptdetail/tatalptdetail.module').then( m => m.TatalptdetailPageModule)
      }
    ]*/
  
  },
  {
    path: 'lpt/:kbno',
    loadChildren: () => import('./tatalptdetail/tatalptdetail.module').then( m => m.TatalptdetailPageModule)
  },/*
  {
    path: 'product-detail',
    loadChildren: () => import('./product-detail/product-detail.module').then( m => m.ProductDetailPageModule)
  },*/
 /* {
    path: 'tatalptdetail',
    loadChildren: () => import('./tatalptdetail/tatalptdetail.module').then( m => m.TatalptdetailPageModule)
  },*/
  {
    path: 'allpricelist',
    loadChildren: () => import('./allpricelist/allpricelist.module').then( m => m.AllpricelistPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
