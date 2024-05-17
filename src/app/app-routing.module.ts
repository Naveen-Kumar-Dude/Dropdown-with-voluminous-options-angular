import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DropdownScrollComponent } from './dropdown-scroll/dropdown-scroll.component';
import { DropdownCodeDetailsComponent } from './dropdown-code-details/dropdown-code-details.component';

const routes: Routes = [
  { path: 'dropdownScroll', component: DropdownScrollComponent },
    { path: 'dropdownCodeDetails', component: DropdownCodeDetailsComponent },
  { path: '**', redirectTo: '/dropdownScroll', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
