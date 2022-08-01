import {ComponentFactoryResolver, Injectable, ViewContainerRef} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlagServiceService {

  constructor(private cfr: ComponentFactoryResolver) {
  }

  async loadComponent(vcr: ViewContainerRef) {
    const {BahrainFlagComponent} = await import("../flags/bahrain-flag/bahrain-flag.component")
    const {BrazilFlagComponent} = await import("../flags/brazil-flag/brazil-flag.component")

    vcr.clear()
    let component: any = Math.random() < 0.5 ? BahrainFlagComponent : BrazilFlagComponent

    return vcr.createComponent(this.cfr.resolveComponentFactory(component))
  }
}
