import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';

import { HomeComponent } from './home/home.component';
import { UnityprojectsComponent } from './unityprojects/unityprojects.component';
import { BlenderprojectsComponent } from './blenderprojects/blenderprojects.component';
import { ProceduralprojectsComponent } from './proceduralprojects/proceduralprojects.component';
import { UnityplanetsComponent } from './unityplanets/unityplanets.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UnityprojectsComponent,
    BlenderprojectsComponent,
    ProceduralprojectsComponent,
    UnityplanetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
