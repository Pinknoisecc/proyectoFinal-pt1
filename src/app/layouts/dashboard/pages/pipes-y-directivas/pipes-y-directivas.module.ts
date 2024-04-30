import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesYDirectivasRoutingModule } from './pipes-y-directivas-routing.module';
import { PipesYDirectivasComponent } from './pipes-y-directivas.component';


@NgModule({
  declarations: [
    PipesYDirectivasComponent
  ],
  imports: [
    CommonModule,
    PipesYDirectivasRoutingModule
  ]
})
export class PipesYDirectivasModule { }
