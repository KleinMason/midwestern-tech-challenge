import { PoolConfig } from 'mysql';
//shaman: {"lifecycle": "transformation", "args": {"type": "import", "target": "*"}}

export class AppConfig {
  port: string;
  mysqlConfig: PoolConfig;
  //shaman: {"lifecycle": "transformation", "args": {"type": "config", "target": "*"}}
}
