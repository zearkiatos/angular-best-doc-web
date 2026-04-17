import { DocumentDataResponse } from "../../dto/DocumentDataResponse";

export interface DocumentDataPort {
    getDocuments(): Promise<DocumentDataResponse[]>;
}
