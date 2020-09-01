import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { ProgressComponent } from '../pages/progress/progress.component';
import { Grafica1Component } from '../pages/grafica1/grafica1.component';
import { PagesComponent } from '../pages/pages.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
// import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
     DashboardComponent,
     ProgressComponent,
     Grafica1Component,
     PagesComponent,
  ],
  exports: [
    DashboardComponent,
     ProgressComponent,
     Grafica1Component,
     PagesComponent,
  ] , imports: [
    CommonModule,
    SharedModule,
    RouterModule,
  ]
})
export class PagesModule { }
