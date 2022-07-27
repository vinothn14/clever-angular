import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppMaterialModule } from './app.material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AttachImgComponent } from './attach-img/attach-img.component';
import { ImageProgressComponent } from './image-progress/image-progress.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DndDirective } from './dnd.directive';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AttachImgComponent,
    ImageProgressComponent,
    DndDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
