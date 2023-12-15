/* istanbul ignore file */
import "reflect-metadata";
import * as _path from 'path';
import { Container } from "inversify";
import { TYPES } from "./app.composition.types";
import { AppConfig } from "../models/app.config";
import { HealthController } from "../controllers/health.controller";
import { SHAMAN_API_TYPES } from "shaman-api";
import { IMysqlDataContext, MysqlDataContext } from 'midwestern-database';
import { ContactService, IContactService } from "../services/contact.service";
import { ContactController } from "../controllers/contact.controller";

export async function Compose(container: Container): Promise<Container> {
  const config = container.get<AppConfig>(SHAMAN_API_TYPES.AppConfig);
  await configureServices(container, config);
  await configureRouter(container);
  await configureDataContext(container, config);
  return container;
}

function configureServices(container: Container, config: AppConfig): Promise<Container> {
  container.bind<AppConfig>(TYPES.AppConfig).toConstantValue(config);
  container.bind<IContactService>(TYPES.ContactService).to(ContactService);
  return Promise.resolve(container);
}

function configureRouter(container: Container): Promise<Container> {
  container.bind<HealthController>(SHAMAN_API_TYPES.ApiController).to(HealthController);
  container.bind<ContactController>(SHAMAN_API_TYPES.ApiController).to(ContactController);
  return Promise.resolve(container);
}

function configureDataContext(container: Container, config: AppConfig): Promise<Container> {
  return new Promise(res => {
    let context = new MysqlDataContext();
    context.initialize(config.mysqlConfig);
    container.bind<IMysqlDataContext>(TYPES.MysqlDataContext).toConstantValue(context);
    res(container);
  });
}
