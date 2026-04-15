import { Component, OnInit, inject } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { AppLoggerService } from '../../core/logging/application/app-logger.service';
import { BestDocNewsItem } from "../best-doc-news-item/best-doc-news-item";

@Component({
  selector: 'app-best-doc-news',
  imports: [MatExpansionModule, BestDocNewsItem, MatIconModule],
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
