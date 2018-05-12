import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SelectGenderComponent } from './components/selectGender/selectGender.component';
import { NamePickerComponent } from './components/namePicker/namePicker.component';
import { RouteContainerComponent, RootRouteGuard } from './components/routeContainer/routeContainer.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [RootRouteGuard],
    component: RouteContainerComponent
  },
  { path: 'selectgender', component: SelectGenderComponent },
  { path: 'namepicker', component: NamePickerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [
    RouteContainerComponent
  ],
  providers: [RootRouteGuard]
})
export class AppRoutingModule {}
