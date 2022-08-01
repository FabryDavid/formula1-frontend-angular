import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appFlagHost]'
})
export class FlagHostDirective {
  constructor(public viewContainerRef: ViewContainerRef) {
  }
}
