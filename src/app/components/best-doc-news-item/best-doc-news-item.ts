import { Component, OnInit, inject } from '@angular/core';
import { AppLoggerService } from '../../core/logging/application/app-logger.service';


@Component({
  selector: 'app-best-doc-news-item',
  imports: [],
  templateUrl: './best-doc-news-item.html',
  styleUrl: './best-doc-news-item.scss',
})
export class BestDocNewsItem implements OnInit {
  private logger = inject(AppLoggerService);
  ngOnInit(): void {
    this.logger.info('BestDocNewsItem initialized 📰✅', {
      scope: 'BestDocNewsItemComponent',
      tags: ['best-doc-news-item', 'init'],
    });
  }
}
