import { Component, OnInit, inject } from '@angular/core';
import { AppLoggerService } from '../../core/logging/application/app-logger.service';

@Component({
  selector: 'app-best-doc-item',
  imports: [],
  templateUrl: './best-doc-item.html',
  styleUrl: './best-doc-item.scss',
})
export class BestDocItem implements OnInit {
  private logger = inject(AppLoggerService);
  ngOnInit(): void {
    this.logger.info('BestDocItem initialized 📊✅', {
      scope: 'BestDocItemComponent',
      tags: ['best-doc-item', 'init'],
    });
  }
}
