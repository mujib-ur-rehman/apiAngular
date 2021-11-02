import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetdataComponent } from './getdata/getdata.component';
import { PostdataComponent } from './postdata/postdata.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'get',
    component: GetdataComponent
  },
  {
    path: 'post',
    component: PostdataComponent
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
