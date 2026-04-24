import { Component, OnInit, inject, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { AppLoggerService } from '../../core/logging/application/app-logger.service';
import { DocumentDataResponse } from '../../core/document/application/dto/DocumentDataResponse';
import { GetDocumentsUseCases } from '../../core/document/application/GetDocumentsUseCases';
import { JsonDocumentDataRepository } from '../../core/document/infrastructure/databases/JsonDocumentDataRepository';

@Component({
  selector: 'app-list-document',
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './list-document.html',
  styleUrl: './list-document.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListDocument implements OnInit {
  private logger = inject(AppLoggerService);
  private cdr = inject(ChangeDetectorRef);
  documents: DocumentDataResponse[] = [];

  constructor(private router: Router) {

  }

  goOwner(ownerName: String) {
    this.logger.info('Navigating to owner details 🧑‍💼➡️', {
        scope: 'ListDocumentComponent',
        tags: ['list-document', 'navigate-owner'],
    });

    this.router.navigate(['/documents/owner'], { queryParams: { name: ownerName } });
  }

  ngOnInit(): void {
    this.logger.info('ListDocument initialized ✅', {
      scope: 'ListDocumentComponent',
      tags: ['list-document', 'init'],
    });

    const getDocumentsUseCases = new GetDocumentsUseCases(
      new JsonDocumentDataRepository()
    )
    getDocumentsUseCases.getDocuments().then(docs => {
      this.documents = docs;
      this.cdr.markForCheck();
      this.logger.info('Documents fetched successfully 📄✅', {
        scope: 'ListDocumentComponent',
        tags: ['list-document', 'fetch-documents', 'success'],
        extra: { documentCount: docs.length },
      });
    }).catch(error => {
      this.logger.error('Error fetching documents ❌', {
        scope: 'ListDocumentComponent',
        tags: ['list-document', 'fetch-documents', 'error'],
        errorMessage: error.message,
      });
    });
  }

}
