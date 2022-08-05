import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
  {
    path: 'news',
    loadChildren: () =>
      import('./components/pages/news/news.module').then(
        (module) => module.NewsModule
      ),
  },
  {
    path: 'drivers',
    loadChildren: () =>
      import('./components/pages/drivers/drivers.module').then(
        (module) => module.DriversModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
