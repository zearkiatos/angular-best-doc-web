import { Component, inject, OnInit } from '@angular/core';
import { AppLoggerService } from '../../core/logging/application/app-logger.service';
import { version } from '../../../../package.json';

@Component({
  selector: 'app-best-doc-footer',
  imports: [],
  templateUrl: './best-doc-footer.html',
  styleUrl: './best-doc-footer.scss',
})
export class BestDocFooter implements OnInit {
  private logger = inject(AppLoggerService);
  companyName = 'BestDoc Inc.';
  currentYear = new Date().getFullYear();
  versionInfo = this.getVersionInfo();
  ngOnInit(): void {
    this.logger.info('BestDocFooter initialized 📊✅', {
      scope: 'BestDocFooterComponent',
      tags: ['best-doc-footer', 'init'],
    });
  }

  private getVersionInfo(): string {
    return `${version}`;
  }
}
