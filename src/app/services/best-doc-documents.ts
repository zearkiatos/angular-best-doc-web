import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DocumentDataResponse } from '../core/document/application/dto/DocumentDataResponse';
import { GetDocumentsUseCases } from '../core/document/application/GetDocumentsUseCases';
import { JsonDocumentDataRepository } from '../core/document/infrastructure/repository/JsonDocumentDataRepository';
import { HttpDocumentDataRepository } from '../core/document/infrastructure/repository/HttpDocumentDataRepository';

@Injectable({
  providedIn: 'root',
})
export class BestDocDocuments {
  private getDocumentsUseCases: GetDocumentsUseCases;
  constructor(private httpClient: HttpClient) {
    const documentDataRepository = new HttpDocumentDataRepository(this.httpClient);
    this.getDocumentsUseCases = new GetDocumentsUseCases(documentDataRepository);
  }
  async getDocuments(): Promise<DocumentDataResponse[]> {
    const ListDocuments = await this.getDocumentsUseCases.getDocuments().then(documents => {
      return documents;
    }).catch(error => {
      console.error('Error fetching documents:', error);
      return [];
    });

    return ListDocuments;
  }
}
