import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SelectGenderComponent } from './components/selectGender/selectGender.component';
import { NamePickerComponent } from './components/namePicker/namePicker.component';

const routes: Routes = [
  { path: '', redirectTo: 'selectgender', pathMatch: 'full' },
  { path: 'selectgender', component: SelectGenderComponent },
  { path: 'namepicker', component: NamePickerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
