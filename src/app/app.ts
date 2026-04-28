import { Component, signal, OnInit, inject } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { AppLoggerService } from './core/logging/application/app-logger.service';
import { TraceContextService } from './core/logging/application/trace-context.service';
import { Dashboard } from './dashboard/dashboard';
import { BestDocFooter } from "./components/best-doc-footer/best-doc-footer";
import { BestDocDocuments } from './services/best-doc-documents';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Dashboard,
    MatSidenavModule,
    MatToolbarModule,
    MatToolbarModule,
    BestDocFooter,
    RouterLink,
    HttpClientModule
],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  providers: [BestDocDocuments]
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
  protected readonly title = signal('BestDoc');
}
