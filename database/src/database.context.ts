import { DatabaseContext, Collection } from 'mysql-shaman';
import { User } from './models/user';

export interface IMysqlDataContext {
  models: {
    user: Collection<User>
  }
  runQuery: <T>(query: string, args: any) => Promise<T>;
}

export class MysqlDataContext extends DatabaseContext implements IMysqlDataContext {

  models = { 
    user: new Collection<User>()
  }

  runQuery = <T>(query: string, args: any): Promise<T> => {
    return this.query<T>(query, args)
  }

}