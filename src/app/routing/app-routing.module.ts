import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../features/home/home.component';

const routess: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routess)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
