import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/pages/home/home.module').then(
        (module) => module.HomeModule
      ),
    data: { animation: 'homePage' },
  },
  {
    path: 'schedule',
    loadChildren: () =>
      import('./components/pages/schedule/schedule.module').then(
        (module) => module.ScheduleModule
      ),
    data: { animation: 'schedulePage' },
  },
  {
    path: 'news',
    loadChildren: () =>
      import('./components/pages/news/news.module').then(
        (module) => module.NewsModule
      ),
    data: { animation: 'newsPage' },
  },
  {
    path: 'drivers',
    loadChildren: () =>
      import('./components/pages/drivers/drivers.module').then(
        (module) => module.DriversModule
      ),
    data: { animation: 'driversPage' },
  },
  {
    path: 'constructors',
    loadChildren: () =>
      import('./components/pages/teams/teams.module').then(
        (module) => module.TeamsModule
      ),
    data: { animation: 'constructorsPage' },
  },
  {
    path: 'standings',
    loadChildren: () =>
      import('./components/pages/standings/standings.module').then(
        (module) => module.StandingsModule
      ),
    data: { animation: 'standingsPage' },
  },
  {
    path: '404',
    loadChildren: () =>
      import('./components/pages/page-not-found/page-not-found.module').then(
        (module) => module.PageNotFoundModule
      ),
    data: { animation: 'pageNotFoundPage' },
  },
  {
    path: '**',
    redirectTo: '/404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
