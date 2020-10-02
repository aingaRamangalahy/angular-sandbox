import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProblemsGoneComponent } from './problems-gone/problems-gone.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'problems', component: ProblemsGoneComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
      RouterModule
  ],
})
export class PagesRoutingModule { }
