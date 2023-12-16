/* istanbul ignore file */
import { Application, Request, Response, Router } from "express";
import { inject, injectable } from "inversify";
import { SERVICE_TYPES, TYPES } from "../composition/app.composition.types";
import { RouteError } from "../models/route-error";
import { IContentService } from "../services/content.service";

@injectable()
export class ContentController {

  private router: Router;

  constructor(
    @inject(TYPES.ExpressApplication) app: Application,
    @inject(SERVICE_TYPES.ContentService) private contentService: IContentService,
  ) {
    this.router = Router();
    this.router
      .get('/home', this.getHomeContent)
      .get('/contact', this.getContactContent)

    app.use('/api/content', this.router);
  }

  getHomeContent = (_req: Request, res: Response, next: any) => {
    return this.contentService.getHomeContent()
      .then(content => res.json(content))
      .catch((ex: Error) => next(new RouteError(ex.message, 500)));
  }

  getContactContent = (_req: Request, res: Response, next: any) => {
    return this.contentService.getContactContent()
      .then(content => res.json(content))
      .catch((ex: Error) => next(new RouteError(ex.message, 500)));
  }

}