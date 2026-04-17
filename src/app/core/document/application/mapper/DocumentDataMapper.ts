import { DocumentData } from "../../domain/model/DocumentData";
import { DocumentDataResponse } from "../dto/DocumentDataResponse";

export function documentDataToResponse(documentData: DocumentData): DocumentDataResponse {
  return new DocumentDataResponse(
    documentData.id,
    documentData.file,
    documentData.fileName,
    documentData.applicant,
    documentData.department,
    documentData.weight,
    documentData.owner,
    documentData.date,
    documentData.metadata,
    documentData.status
  );
}

export function documentDataListToResponseList(documentDataList: DocumentData[]): DocumentDataResponse[] {
  return documentDataList.map(documentData => documentDataToResponse(documentData));
}
