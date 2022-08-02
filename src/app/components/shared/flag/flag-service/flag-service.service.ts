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
      case "australia":
        const {AustraliaFlagComponent} = await import("../flags/australia-flag/australia-flag.component")
        component = AustraliaFlagComponent;
        break;
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
      case "spain":
        const {SpainFlagComponent} = await import("../flags/spain-flag/spain-flag.component")
        component = SpainFlagComponent;
        break;
      case "monaco":
        const {MonacoFlagComponent} = await import("../flags/monaco-flag/monaco-flag.component")
        component = MonacoFlagComponent;
        break;
      case "azerbaijan":
        const {AzerbaijanFlagComponent} = await import("../flags/azerbaijan-flag/azerbaijan-flag.component")
        component = AzerbaijanFlagComponent;
        break;
      case "france":
        const {FranceFlagComponent} = await import("../flags/france-flag/france-flag.component")
        component = FranceFlagComponent;
        break;
      case "austria":
        const {AustriaFlagComponent} = await import("../flags/austria-flag/austria-flag.component")
        component = AustriaFlagComponent;
        break;
      case "uk":
        const {UkFlagComponent} = await import("../flags/uk-flag/uk-flag.component")
        component = UkFlagComponent;
        break;
      case "hungary":
        const {HungaryFlagComponent} = await import("../flags/hungary-flag/hungary-flag.component")
        component = HungaryFlagComponent;
        break;
      case "belgium":
        const {BelgiumFlagComponent} = await import("../flags/belgium-flag/belgium-flag.component")
        component = BelgiumFlagComponent;
        break;
      case "netherlands":
        const {NetherlandsFlagComponent} = await import("../flags/netherlands-flag/netherlands-flag.component")
        component = NetherlandsFlagComponent;
        break;
      case "russia":
        const {RussiaFlagComponent} = await import("../flags/russia-flag/russia-flag.component")
        component = RussiaFlagComponent;
        break;
      case "turkey":
        const {TurkeyFlagComponent} = await import("../flags/turkey-flag/turkey-flag.component")
        component = TurkeyFlagComponent;
        break;
      case "usa":
        const {UsaFlagComponent} = await import("../flags/usa-flag/usa-flag.component")
        component = UsaFlagComponent;
        break;
      case "mexico":
        const {MexicoFlagComponent} = await import("../flags/mexico-flag/mexico-flag.component")
        component = MexicoFlagComponent;
        break;
      case "brazil":
        const {BrazilFlagComponent} = await import("../flags/brazil-flag/brazil-flag.component")
        component = BrazilFlagComponent;
        break;
      case "qatar":
        const {QatarFlagComponent} = await import("../flags/qatar-flag/qatar-flag.component")
        component = QatarFlagComponent;
        break;
      case "saudi arabia":
        const {SaudiArabiaFlagComponent} = await import("../flags/saudi-arabia-flag/saudi-arabia-flag.component")
        component = SaudiArabiaFlagComponent;
        break;
      case "uae":
        const {UaeFlagComponent} = await import("../flags/uae-flag/uae-flag.component")
        component = UaeFlagComponent;
        break;
      default:
        // No flag found for the given country
        return null
    }

    vcr.clear()
    return vcr.createComponent(this.cfr.resolveComponentFactory(component))
  }
}
