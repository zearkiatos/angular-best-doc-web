import { Component, OnInit, inject } from '@angular/core';
import { AppLoggerService } from '../../core/logging/application/app-logger.service';
import { BestDocTrafficLightItem } from '../best-doc-traffic-light-item/best-doc-traffic-light-item';

@Component({
  selector: 'app-best-doc-traffic-light',
  imports: [BestDocTrafficLightItem, BestDocTrafficLightItem],
  templateUrl: './best-doc-traffic-light.html',
  styleUrl: './best-doc-traffic-light.scss',
})
export class BestDocTrafficLight implements OnInit {
  private logger = inject(AppLoggerService);
  ngOnInit(): void {
    this.logger.info('BestDocTrafficLight initialized 🚥✅', {
      scope: 'BestDocTrafficLightComponent',
      tags: ['best-doc-traffic-light', 'init'],
    });
  }
}
