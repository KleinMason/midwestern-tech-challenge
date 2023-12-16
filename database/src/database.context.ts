import { DatabaseContext, Collection } from 'mysql-shaman';
import { Contact } from './models/contact';
import { HomeContentDetails } from './models/home-content-details';
import { HomeContentImage } from './models/home-content-image';
import { HomeContent } from './models/home-content';
import { Image } from './models/image';
import { ContactContent } from './models/contact-content';

export interface IMysqlDataContext {
  models: {
    contact_content: Collection<ContactContent>;
    contact: Collection<Contact>;
    home_content_details: Collection<HomeContentDetails>;
    home_content_image: Collection<HomeContentImage>;
    home_content: Collection<HomeContent>;
    image: Collection<Image>;
  }
  runQuery: <T>(query: string, args: any) => Promise<T>;
}

export class MysqlDataContext extends DatabaseContext implements IMysqlDataContext {

  models = {
    contact_content: new Collection<ContactContent>(),
    contact: new Collection<Contact>(),
    home_content_details: new Collection<HomeContentDetails>(),
    home_content_image: new Collection<HomeContentImage>(),
    home_content: new Collection<HomeContent>(),
    image: new Collection<Image>(),
  }

  runQuery = <T>(query: string, args: any): Promise<T> => {
    return this.query<T>(query, args)
  }

}