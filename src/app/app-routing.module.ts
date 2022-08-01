import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/pages/home/home.module').then(
        (module) => module.HomeModule
      ),
  },
  {
    path: 'schedule',
    loadChildren: () =>
      import('./components/pages/schedule/schedule.module').then(
        (module) => module.ScheduleModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
