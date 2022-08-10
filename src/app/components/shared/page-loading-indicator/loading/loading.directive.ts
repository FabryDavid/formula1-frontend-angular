import {
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { PageLoadingIndicatorComponent } from '../page-loading-indicator.component';
import { IRequestError } from '../../../../interfaces/irequest-error';
import { ErrorComponent } from '../error/error.component';

@Directive({
  selector: '[appLoading]',
})
export class LoadingDirective {
  loadingFactory: ComponentFactory<PageLoadingIndicatorComponent>;
  loadingComponent!: ComponentRef<PageLoadingIndicatorComponent>;

  errorFactory: ComponentFactory<ErrorComponent>;
  errorComponent!: ComponentRef<ErrorComponent>;

  isLoading = false;
  error: IRequestError | null | string = null;

  @Input()
  set appLoading(loading: boolean) {
    this.isLoading = loading;
    this.setView();
  }

  @Input() set appLoadingError(error: IRequestError | null | string) {
    this.error = error;
    this.setView();
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
    this.loadingFactory = this.componentFactoryResolver.resolveComponentFactory(
      PageLoadingIndicatorComponent
    );
    this.errorFactory =
      this.componentFactoryResolver.resolveComponentFactory(ErrorComponent);
  }

  private setView() {
    this.vcRef.clear();

    if (this.isLoading) {
      this.loadingComponent = this.vcRef.createComponent(this.loadingFactory);
    } else if (this.error) {
      this.errorComponent = this.vcRef.createComponent(this.errorFactory);
      this.errorComponent.instance.error = this.error;
    } else {
      this.vcRef.createEmbeddedView(this.templateRef);
    }
  }
}
