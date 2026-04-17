import { DocumentData } from './model/DocumentData';

interface DocumentDataRepository {
  get(): Promise<DocumentData[]>;
}


export type { DocumentDataRepository };
