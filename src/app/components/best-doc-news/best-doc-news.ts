import { Component, OnInit, inject } from '@angular/core';
import { AppLoggerService } from '../../core/logging/application/app-logger.service';


@Component({
  selector: 'app-best-doc-news',
  imports: [],
  templateUrl: './best-doc-news.html',
  styleUrl: './best-doc-news.scss',
})
export class BestDocNews implements OnInit {
  private logger = inject(AppLoggerService);
  ngOnInit(): void {
    this.logger.info('BestDocNews initialized 📰✅', {
      scope: 'BestDocNewsComponent',
      tags: ['best-doc-news', 'init'],
    });
  }
}
