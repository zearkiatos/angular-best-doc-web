import type { DocumentDataRepository } from '../../domain/repository/DocumentDataRepository';
import { HttpStatusCode } from '@angular/common/http';
import DocumentDataJson from '../../../../../data/mocks/documents.json';
import { DocumentDataDb } from './mapper/DocumentDataDb';
import { toDomainList } from './mapper/DocumentDataMapper';
import { DocumentData } from '../../domain/model/DocumentData';

export class JsonDocumentDataRepository implements DocumentDataRepository {
  async get(): Promise<DocumentData[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = DocumentDataJson as DocumentDataDb[];
        resolve(toDomainList(data));
      }, HttpStatusCode.InternalServerError);
    });
  }
}
