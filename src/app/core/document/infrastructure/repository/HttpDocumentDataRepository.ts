import type { DocumentDataRepository } from '../../domain/repository/DocumentDataRepository';
import { DocumentDataDb } from './mapper/DocumentDataDb';
import { toDomain, toDomainList } from './mapper/DocumentDataMapper';
import { DocumentData } from '../../domain/model/DocumentData';
import { environment } from '../../../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

export class HttpDocumentDataRepository implements DocumentDataRepository {
  private documentsBaseUrl = environment.documentApiBaseUrl;
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }
  async get(): Promise<DocumentData[]> {
    const response = await firstValueFrom(
      this.httpClient.get<DocumentDataDb[]>(this.documentsBaseUrl)
    );
;
    return toDomainList(response);
  }
}
