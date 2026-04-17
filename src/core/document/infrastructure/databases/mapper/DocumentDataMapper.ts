import { DocumentData } from "../../../domain/model/DocumentData";
import { DocumentDataDb } from "./DocumentDataDb";


export function toDomain(db: DocumentDataDb): DocumentData {
  return new DocumentData(
    db.id,
    db.file,
    db.file_name,
    db.applicant,
    db.department,
    db.weight,
    db.owner,
    db.date,
    db.metadata,
    db.status
  );
}

export function toDomainList(dbList: DocumentDataDb[]): DocumentData[] {
  return dbList.map(toDomain);
}
