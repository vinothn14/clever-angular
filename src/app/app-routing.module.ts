import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { ViewCardComponent } from './components/view-card/view-card.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent,
    children: [
      {path: '', redirectTo: 'add-task', pathMatch: 'full'},
      {path: 'add-task', component: AddTaskComponent},
      {path: 'view-card', component: ViewCardComponent}
    ]
  },
  // {path: 'view-card', component: ViewCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
