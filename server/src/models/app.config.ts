import { DatabaseConfig } from 'sqlite-shaman';
//shaman: {"lifecycle": "transformation", "args": {"type": "import", "target": "*"}}

export class AppConfig {
  port: string;
  sqliteConfig: DatabaseConfig;
  //shaman: {"lifecycle": "transformation", "args": {"type": "config", "target": "*"}}
}
