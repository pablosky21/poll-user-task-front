import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPollAddComponent } from './componentes/user-poll-add/user-poll-add.component';
import { UserPollListComponent } from './componentes/user-poll-list/user-poll-list.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: ''},
  {path: 'new', component: UserPollAddComponent},
  {path: 'list', component: UserPollListComponent},
  {path: '**', redirectTo: '/list'}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
