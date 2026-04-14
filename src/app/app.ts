import { Component, signal, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppLoggerService } from './core/logging/application/app-logger.service';
import { TraceContextService } from './core/logging/application/trace-context.service';
import { Dashboard } from "./dashboard/dashboard";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Dashboard, MatSidenavModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  private logger = inject(AppLoggerService);
  private traceService = inject(TraceContextService);

  ngOnInit(): void {
    this.traceService.startTrace();
    this.logger.info('App initialized 🚀✅', {
      scope: 'AppComponent',
      extra: { title: this.title() },
      tags: ['app', 'init'],
    });
  }
  protected readonly title = signal('angular-best-doc-web');
}
