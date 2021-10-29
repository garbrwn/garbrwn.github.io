import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlenderprojectsComponent } from './blenderprojects/blenderprojects.component';
import { HomeComponent } from './home/home.component';
import { ProceduralprojectsComponent } from './proceduralprojects/proceduralprojects.component';
import { UnityprojectsComponent } from './unityprojects/unityprojects.component';

const routes: Routes = [
  { path: '', component:  HomeComponent},
  { path: 'unity', component: UnityprojectsComponent },
  { path: 'blender', component: BlenderprojectsComponent},
  { path: 'procedural', component: ProceduralprojectsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
