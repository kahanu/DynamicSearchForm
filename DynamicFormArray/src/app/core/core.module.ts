import { NgModule, Optional, SkipSelf } from '@angular/core';
import { throwIfAlreadyLoaded } from './guards/module-import.guard';
import { CommonModule } from '../../../node_modules/@angular/common';
import { organization, common } from './core-declarations.lib';

@NgModule({
  imports: [CommonModule],
  providers: [
    ...common,
    ...organization
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
