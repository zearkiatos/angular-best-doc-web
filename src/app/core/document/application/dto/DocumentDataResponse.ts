import { BestDocInterfaceDocument } from "../../../../interfaces/best-doc-interface-document";

export class DocumentDataResponse {
  constructor(
    public id: String,
    public file: String,
    public fileName: String,
    public applicant: String,
    public department: String,
    public weight: String,
    public owner: String,
    public date: String,
    public metadata: String,
    public status: Boolean,
  ) {
    this.id = id;
    this.file = file;
    this.fileName = fileName;
    this.applicant = applicant;
    this.department = department;
    this.weight = weight;
    this.owner = owner;
    this.date = date;
    this.metadata = metadata;
    this.status = status;
  }
}
