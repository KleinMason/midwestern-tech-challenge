import { DatabaseContext, Collection } from 'mysql-shaman';
import { Contact } from './models/contact';

export interface IMysqlDataContext {
  models: {
    contact: Collection<Contact>
  }
  runQuery: <T>(query: string, args: any) => Promise<T>;
}

export class MysqlDataContext extends DatabaseContext implements IMysqlDataContext {

  models = {
    contact: new Collection<Contact>()
  }

  runQuery = <T>(query: string, args: any): Promise<T> => {
    return this.query<T>(query, args)
  }

}