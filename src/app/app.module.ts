import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';

import { HomeComponent } from './home/home.component';
import { UnityprojectsComponent } from './unityprojects/unityprojects.component';
import { BlenderprojectsComponent } from './blenderprojects/blenderprojects.component';
import { ProceduralprojectsComponent } from './proceduralprojects/proceduralprojects.component';
import { UnityplanetsComponent } from './unityplanets/unityplanets.component';
import { PostCardComponent } from './post-card/post-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UnityprojectsComponent,
    BlenderprojectsComponent,
    ProceduralprojectsComponent,
    UnityplanetsComponent,
    PostCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
