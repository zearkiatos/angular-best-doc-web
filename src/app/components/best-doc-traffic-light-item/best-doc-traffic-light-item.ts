import { Component, OnInit, inject } from '@angular/core';
import { AppLoggerService } from '../../core/logging/application/app-logger.service';


@Component({
  selector: 'app-best-doc-traffic-light-item',
  imports: [],
  templateUrl: './best-doc-traffic-light-item.html',
  styleUrl: './best-doc-traffic-light-item.scss',
})
export class BestDocTrafficLightItem implements OnInit {
  private logger = inject(AppLoggerService);
  ngOnInit(): void {
    this.logger.info('BestDocTrafficLightItem initialized 🚥✅', {
      scope: 'BestDocTrafficLightItemComponent',
      tags: ['best-doc-traffic-light-item', 'init'],
    });
  }
}
