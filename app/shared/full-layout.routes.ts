import { Routes, RouterModule } from '@angular/router';
//Route for content layout with sidebar, navbar and footer.
export const Full_ROUTES: Routes = [
 
  {
    path: '',
    loadChildren: () => import('../studentinterface/studentinterface.module').then(m => m.StudentinterfaceModule)
  },
  // ,
  // {
  //   path: 'roles',
  //   loadChildren: () => import('../../roles/roles.module').then(m => m.RolesModule)
  // }
  // ,
  // {
  //   path: 'country',
  //   loadChildren: () => import('../../countrys/countrys.module').then(m => m.CountrysModule)
  // }
  // ,
  // {
  //   path: 'coins',
  //   loadChildren: () => import('../../coins/coins.module').then(m => m.CoinsModule)
  // }
  // ,
  // {
  //   path: 'contracts',
  //   loadChildren: () => import('../../contracts/contracts.module').then(m => m.ContractsModule)
  // },
  // {
  //   path: 'offers',
  //   loadChildren: () => import('../../offers/offers.module').then(m => m.OffersModule)
  // }
];