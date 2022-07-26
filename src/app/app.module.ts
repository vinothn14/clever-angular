import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from './app.material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AttachImgComponent } from './components/attach-img/attach-img.component';
import { ImageProgressComponent } from './components/image-progress/image-progress.component';
import { ViewCardComponent } from './components/view-card/view-card.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DndDirective } from './dnd.directive';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AttachImgComponent,
    ImageProgressComponent,
    ViewCardComponent,
    AddTaskComponent,
    DndDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
