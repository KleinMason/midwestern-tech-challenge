import { IContactContent } from "../models/contact-content.model";
import { IHomeContent } from "../models/home-content.model";
import { IPageContent } from "../models/page-content.model";
import { ApiService } from "./api.service";

export interface IContentService {
  getHomePageContent: () => Promise<IHomeContent[]>;
  getContactPageContent: () => Promise<IContactContent>;
}

export class ContentService extends ApiService implements IContentService {

  protected get apiBaseUri(): string {
    return this.baseUri;
  }

  private baseUri: string;

  constructor() {
    super();
    this.baseUri = "http://localhost:3000/api/content";
  }

  getHomePageContent = async (): Promise<IHomeContent[]> => {
    return this.get<IHomeContent[]>('/home')
      .then(homeContent => (homeContent))
      .catch(err => {
        throw new Error(err);
      });
  }

  getContactPageContent = async (): Promise<IContactContent> => {
    return this.get<IContactContent>('/contact')
      .then(contactContent => (contactContent))
      .catch(err => {
        throw new Error(err);
      });
  }
}