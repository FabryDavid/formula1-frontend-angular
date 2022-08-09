import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {FlagHostDirective} from '../flag-host/flag-host.directive';
import {Subject} from 'rxjs';
import {FlagServiceService} from '../flag-service/flag-service.service';

@Component({
  selector: 'app-flag-container',
  templateUrl: './flag-container.component.html',
  styleUrls: ['./flag-container.component.scss'],
})
export class FlagContainerComponent implements OnInit {
  @Input() country!: string;

  @ViewChild(FlagHostDirective, { static: true }) flagHost!: FlagHostDirective;
  private destroySubject = new Subject();

  constructor(private flagService: FlagServiceService) {}

  ngOnInit(): void {
    this.flagService.loadComponent(
      this.flagHost.viewContainerRef,
      this.country
    );
  }

  ngOnDestroy() {
    this.destroySubject.next();
    this.destroySubject.complete();
  }
}
