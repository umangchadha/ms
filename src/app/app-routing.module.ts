import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SampleTableComponent } from './sample-table/sample-table.component';

const routes: Routes = [
  {
    path: '',
    component: SampleTableComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
