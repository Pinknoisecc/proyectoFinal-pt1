import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesYDirectivasRoutingModule } from './pipes-y-directivas-routing.module';
import { PipesYDirectivasComponent } from './pipes-y-directivas.component';
import { MyCustomTextTransformPipe } from './my-custom-text-transform.pipe';
import { SharedModule } from '../../../../shared/shared.module';


@NgModule({
  declarations: [
    PipesYDirectivasComponent,
    MyCustomTextTransformPipe
  ],
  imports: [
    CommonModule,
    PipesYDirectivasRoutingModule,
    SharedModule,

  ],
  exports: [PipesYDirectivasComponent, MyCustomTextTransformPipe]
})
export class PipesYDirectivasModule { }
