import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SelectGenderComponent } from './components/selectGender/selectGender.component';
import { NamePickerComponent } from './components/namePicker/namePicker.component';
import { RouteContainerComponent } from './components/routeContainer/routeContainer.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'full'
  },
  {
    path: 'user',
    component: RouteContainerComponent,
    children: [
      { path: 'selectgender', component: SelectGenderComponent },
      { path: 'namepicker', component: NamePickerComponent }
    ]
  },
  {
    path: '**',
    redirectTo: 'user',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
