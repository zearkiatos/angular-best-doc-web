import { DocumentData } from "../domain/model/DocumentData";
import { DocumentDataRepository } from "../domain/DocumentDataRepository";

export class GetDocumentsUseCases {
  private repository: DocumentDataRepository;
  constructor(repository: DocumentDataRepository) {
    this.repository = repository;
  }

  getDocuments(): Promise<DocumentData[]> {
    return this.repository.get();
  }
}

