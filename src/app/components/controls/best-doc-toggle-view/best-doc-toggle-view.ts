import { Component, OnInit, inject } from '@angular/core';
import { AppLoggerService } from '../../../core/logging/application/app-logger.service';



@Component({
  selector: 'app-best-doc-toggle-view',
  imports: [],
  templateUrl: './best-doc-toggle-view.html',
  styleUrl: './best-doc-toggle-view.scss',
})
export class BestDocToggleView implements OnInit {
  private logger = inject(AppLoggerService);
  ngOnInit(): void {
    this.logger.info('BestDocToggleView initialized 🔄✅', {
      scope: 'BestDocToggleViewComponent',
      tags: ['best-doc-toggle-view', 'init'],
    });
  }
}
