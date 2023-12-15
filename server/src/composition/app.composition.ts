/* istanbul ignore file */
import * as express from 'express';
import { Container } from "inversify";
import "reflect-metadata";

import { IMysqlDataContext, MysqlDataContext } from "midwestern-database";
import { ApiRouter } from "../api.router";
import { ILogger, Logger } from "../logger";
import { AppConfig } from "../models/app.config";
import { CONTROLLER_TYPES, SERVICE_TYPES, TYPES } from "./app.composition.types";

import { ApiService, IApiService } from "../api.service";
import { ContactService, IContactService } from "../services/contact.service";
import { IJsonFileService, JsonFileService } from "../services/json-file.service";

import { HealthController } from "../controllers/health.controller";
import { ContactController } from '../controllers/contact.controller';

export function Configure(config: AppConfig): Promise<Container> {
  return configureServices(new Container(), config)
    .then(container => configureRouter(container))
    .then(container => configureDataContext(container, config));
}

function configureServices(container: Container, config: AppConfig): Promise<Container> {
  container.bind<AppConfig>(TYPES.AppConfig).toConstantValue(config);
  container.bind<ILogger>(TYPES.Logger).to(Logger);
  container.bind<express.Application>(TYPES.ExpressApplication).toConstantValue(express());
  container.bind<IApiService>(SERVICE_TYPES.ApiService).to(ApiService).inSingletonScope();
  container.bind<IJsonFileService>(SERVICE_TYPES.JsonFileService).to(JsonFileService);
  container.bind<IContactService>(SERVICE_TYPES.ContactService).to(ContactService)
  return Promise.resolve(container);
}

function configureRouter(container: Container): Promise<Container> {
  container.bind<ApiRouter>(TYPES.ApiRouter).to(ApiRouter);
  container.bind<HealthController>(CONTROLLER_TYPES.HealthController).to(HealthController);
  container.bind<ContactController>(CONTROLLER_TYPES.ContactController).to(ContactController);
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