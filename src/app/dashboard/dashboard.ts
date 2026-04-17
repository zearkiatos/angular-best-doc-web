import { Component, OnInit, inject } from '@angular/core';
import { AppLoggerService } from '../core/logging/application/app-logger.service';
import { BestDocGrid } from '../components/best-doc-grid/best-doc-grid';
import { BestDocTrafficLight } from '../components/best-doc-traffic-light/best-doc-traffic-light';
import { BestDocNews } from '../components/best-doc-news/best-doc-news';
import { BestDocToggleView } from "../components/controls/best-doc-toggle-view/best-doc-toggle-view";


@Component({
  selector: 'app-dashboard',
  imports: [BestDocGrid, BestDocTrafficLight, BestDocNews, BestDocToggleView],
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
