import { Component, OnInit, inject, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { AppLoggerService } from '../../core/logging/application/app-logger.service';
import { GetDocumentsUseCases } from '../../core/document/application/GetDocumentsUseCases';
import { DocumentDataResponse } from '../../core/document/application/dto/DocumentDataResponse';
import { JsonDocumentDataRepository } from '../../core/document/infrastructure/repository/JsonDocumentDataRepository';
import { BestDocDocuments } from '../../services/best-doc-documents';
@Component({
  selector: 'app-best-doc-item',
  imports: [CommonModule, MatIconModule],
  templateUrl: './best-doc-item.html',
  styleUrl: './best-doc-item.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BestDocItem implements OnInit {
  private logger = inject(AppLoggerService);
  private cdr = inject(ChangeDetectorRef);

  constructor(private documentService: BestDocDocuments) {

  }
  documents: DocumentDataResponse[] = [];
  ngOnInit(): void {
    this.logger.info('BestDocItem initialized 📊✅', {
      scope: 'BestDocItemComponent',
      tags: ['best-doc-item', 'init'],
    });

    this.documentService.getDocuments().then(docs => {
      this.documents = docs;
      this.cdr.markForCheck();
      this.logger.info('Documents fetched successfully 📄✅', {
        scope: 'BestDocItemComponent',
        tags: ['best-doc-item', 'fetch-documents', 'success'],
        extra: { documentCount: docs.length },
      });
    }).catch(error => {
      this.logger.error('Error fetching documents ❌', {
        scope: 'BestDocItemComponent',
        tags: ['best-doc-item', 'fetch-documents', 'error'],
        errorMessage: error.message,
      });
    });
  }
}
