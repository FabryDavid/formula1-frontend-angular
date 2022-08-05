import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DriversComponent} from "./drivers.component";

const routes: Routes = [
  {
    path: '',
    component: DriversComponent
  },
  {
    path: ':driverId',
    loadChildren: () =>
      import('./driver-details/driver-details.module').then(
        (module) => module.DriverDetailsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriversRoutingModule {
}
