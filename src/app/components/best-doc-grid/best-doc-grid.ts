import { Component, OnInit, inject } from '@angular/core';
import { AppLoggerService } from '../../core/logging/application/app-logger.service';

@Component({
  selector: 'app-best-doc-grid',
  imports: [],
  templateUrl: './best-doc-grid.html',
  styleUrl: './best-doc-grid.scss',
})
export class BestDocGrid implements OnInit {
  private logger = inject(AppLoggerService);
  ngOnInit(): void {
    this.logger.info('BestDocGrid initialized 📊✅', {
      scope: 'BestDocGridComponent',
      tags: ['best-doc-grid', 'init'],
    });
  }
}
