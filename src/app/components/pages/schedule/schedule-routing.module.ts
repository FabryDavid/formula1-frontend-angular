import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ScheduleComponent} from './schedule.component';

const routes: Routes = [
  {
    path: '',
    component: ScheduleComponent,
  },
  {
    path: ':round',
    loadChildren: () =>
      import('./weekend/weekend.module').then((module) => module.WeekendModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScheduleRoutingModule {}
