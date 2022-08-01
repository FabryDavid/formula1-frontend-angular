import {ComponentFactoryResolver, Injectable, ViewContainerRef} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlagServiceService {

  constructor(private cfr: ComponentFactoryResolver) {
  }

  async loadComponent(vcr: ViewContainerRef, country: string) {
    let component: any

    switch (country.toLowerCase()) {
      case "bahrain":
        const {BahrainFlagComponent} = await import("../flags/bahrain-flag/bahrain-flag.component")
        component = BahrainFlagComponent;
        break;
      case "italy":
        const {ItalyFlagComponent} = await import("../flags/italy-flag/italy-flag.component")
        component = ItalyFlagComponent;
        break;
      case "portugal":
        const {PortugalFlagComponent} = await import("../flags/portugal-flag/portugal-flag.component")
        component = PortugalFlagComponent;
        break;
      //   case "spain":
      //     return SpainFlag;
      //   case "monaco":
      //     return MonacoFlag;
      //   case "azerbaijan":
      //     return AzerbaijanFlag;
      //   case "france":
      //     return FranceFlag;
      //   case "austria":
      //     return AustriaFlag;
      //   case "uk":
      //     return UkFlag;
      //   case "hungary":
      //     return HungaryFlag;
      //   case "belgium":
      //     return BelgiumFlag;
      //   case "netherlands":
      //     return NetherlandsFlag;
      //   case "russia":
      //     return RussiaFlag;
      //   // case "turkey":
      //   // return TurkeyFlag
      //   case "usa":
      //     return UsaFlag;
      //   case "mexico":
      //     return MexicoFlag;
      case "brazil":
        const {BrazilFlagComponent} = await import("../flags/brazil-flag/brazil-flag.component")
        component = BrazilFlagComponent;
        break;
      //   // case "qatar":
      //   //   return QatarFlag
      //   case "saudi arabia":
      //     return SaudiArabiaFlag;
      //   case "uae":
      //     return UaeFlag;
    }

    vcr.clear()
    return vcr.createComponent(this.cfr.resolveComponentFactory(component))
  }
}
