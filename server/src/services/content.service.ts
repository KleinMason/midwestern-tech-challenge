import { inject, injectable } from "inversify";
import { ContactContent, HomeContentDetails, IMysqlDataContext } from "midwestern-database";
import { TYPES } from "../composition/app.composition.types";

export interface IContentService {
  getHomeContent: () => Promise<HomeContentDetails[]>;
  getContactContent: () => Promise<ContactContent>;
}

@injectable()
export class ContentService implements IContentService {

  constructor(
    @inject(TYPES.MysqlDataContext) private context: IMysqlDataContext
  ) { }

  getHomeContent = (): Promise<HomeContentDetails[]> => {
    return this.context.models.home_content_details.find();
  };

  getContactContent = (): Promise<ContactContent> => {
    return this.context.models.contact_content.findOne({
      identity: 'contactContentId',
      args: [1]
    });
  };

}