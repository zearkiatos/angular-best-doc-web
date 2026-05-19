import { Component, inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AppLoggerService } from '../../core/logging/application/app-logger.service';

@Component({
  selector: 'app-best-doc-owner',
  imports: [],
  templateUrl: './best-doc-owner.html',
  styleUrl: './best-doc-owner.scss',
})
export class BestDocOwner implements OnInit {
  private logger = inject(AppLoggerService);
  name: string = '';
  constructor(private router: ActivatedRoute) {}
  ngOnInit(): void {
    this.logger.info('BestDocOwner initialized 📰✅', {
      scope: 'BestDocNewsItemComponent',
      tags: ['best-doc-owner', 'init'],
    });

    this.router.queryParams.subscribe((params) => {
      this.name = params['name'];
    });
  }
}
