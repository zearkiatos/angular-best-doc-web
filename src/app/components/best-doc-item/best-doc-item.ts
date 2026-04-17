import { Component, OnInit, inject, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { AppLoggerService } from '../../core/logging/application/app-logger.service';
import { GetDocumentsUseCases } from '../../core/document/application/GetDocumentsUseCases';
import { DocumentDataResponse } from '../../core/document/application/dto/DocumentDataResponse';
import { JsonDocumentDataRepository } from '../../core/document/infrastructure/databases/JsonDocumentDataRepository';
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
  documents: DocumentDataResponse[] = [];
  ngOnInit(): void {
    this.logger.info('BestDocItem initialized 📊✅', {
      scope: 'BestDocItemComponent',
      tags: ['best-doc-item', 'init'],
    });

    const getDocumentsUseCases = new GetDocumentsUseCases(
      new JsonDocumentDataRepository()
    )
    getDocumentsUseCases.getDocuments().then(docs => {
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

enum Status {
  Active = "Active",
  Inactive = "Inactive"
}
