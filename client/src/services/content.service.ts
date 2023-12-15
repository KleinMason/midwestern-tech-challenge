import { IHomeContent } from "../models/home-content.model";
import { ApiService } from "./api.service";

export interface IContentService {
  getHomeCardContent: () => Promise<IHomeContent[]>;
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

  getHomeCardContent = async (): Promise<IHomeContent[]> => {
    return this.get<IHomeContent[]>('/home')
      .then(homeContent => (homeContent));
  }
}