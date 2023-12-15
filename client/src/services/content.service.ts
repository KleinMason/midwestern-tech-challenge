import { IPageContent } from "../models/page-content.model";
import { ApiService } from "./api.service";

export interface IContentService {
  getHomePageContent: () => Promise<IPageContent[]>;
  getContactPageContent: () => Promise<IPageContent>;
}

export class ContentService extends ApiService implements IContentService {

  protected get apiBaseUri(): string {
    return this.baseUri;
  }

  private baseUri: string;

  constructor() {
    super();
    this.baseUri = "https://api.mwi.dev/content";
  }

  getHomePageContent = async (): Promise<IPageContent[]> => {
    return this.get<IPageContent[]>('/home')
      .then(homeContent => (homeContent))
      .catch(err => {
        throw new Error(err);
      });
  }

  getContactPageContent = async (): Promise<IPageContent> => {
    return this.get<IPageContent[]>('/contact')
      .then(contactContent => contactContent[0])
      .catch(err => {
        throw new Error(err);
      });
  }
}