import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WeekendComponent} from "./weekend.component";

const routes: Routes = [
  {
    path: '',
    component: WeekendComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeekendRoutingModule {
}
