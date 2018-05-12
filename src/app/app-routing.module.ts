import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SelectGenderComponent } from './pages/selectGender/selectGender.component';

const routes: Routes = [
  { path: '', redirectTo: 'selectgender', pathMatch: 'full' },
  { path: 'selectgender', component: SelectGenderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
