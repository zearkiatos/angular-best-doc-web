import { Component, OnInit, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { AppLoggerService } from '../../core/logging/application/app-logger.service';
import { BestDocItem } from "../best-doc-item/best-doc-item";

@Component({
  selector: 'app-best-doc-grid',
  imports: [MatCardModule, BestDocItem],
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
