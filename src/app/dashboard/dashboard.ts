import { Component, OnInit, inject } from '@angular/core';
import { AppLoggerService } from '../core/logging/application/app-logger.service';
import { TraceContextService } from '../core/logging/application/trace-context.service';


@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard implements OnInit {
  private logger = inject(AppLoggerService);
  ngOnInit(): void {
    this.logger.info('Dashboard initialized 📊✅', {
      scope: 'DashboardComponent',
      tags: ['dashboard', 'init'],
    });
  }
}
