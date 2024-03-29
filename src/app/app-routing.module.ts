import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SelectGenderComponent } from './components/selectGender/selectGender.component';
import { NamePickerComponent } from './components/namePicker/namePicker.component';
import { RouteContainerComponent } from './components/routeContainer/routeContainer.component';
import { LikedNamesComponent } from './components/likedNames/likedNames.component';
import { DislikedNamesComponent } from './components/dislikedNames/dislikedNames.component';
import { LiveComponent } from './components/live/live.component';
import { UserResolver } from './components/routeContainer/routeResolver';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'full'
  },
  {
    path: 'user',
    resolve: {
      team: UserResolver
    },
    component: RouteContainerComponent,
    children: [
      { path: 'selectgender', component: SelectGenderComponent },
      { path: 'namepicker', component: NamePickerComponent },
      { path: 'likednames', component: LikedNamesComponent },
      { path: 'dislikednames', component: DislikedNamesComponent },
      { path: 'live', component: LiveComponent }
    ]
  },
  {
    path: '**',
    redirectTo: 'user',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [UserResolver]
})
export class AppRoutingModule {}
