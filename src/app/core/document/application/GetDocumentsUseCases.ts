import { DocumentData } from "../domain/model/DocumentData";
import { DocumentDataRepository } from "../domain/DocumentDataRepository";
import { DocumentDataPort } from "./port/input/DocumentDataPort";
import { DocumentDataResponse } from "./dto/DocumentDataResponse";
import { documentDataListToResponseList } from "./mapper/DocumentDataMapper";
export class GetDocumentsUseCases implements DocumentDataPort {
  private repository: DocumentDataRepository;
  constructor(repository: DocumentDataRepository) {
    this.repository = repository;
  }

  getDocuments(): Promise<DocumentDataResponse[]> {
    return this.repository.get().then(documentDataList => documentDataListToResponseList(documentDataList));
  }
}

