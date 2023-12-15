/* istanbul ignore file */
import { Application, Request, Response, Router } from "express";
import { inject, injectable } from "inversify";
import { SERVICE_TYPES, TYPES } from "../composition/app.composition.types";
import { IContactService } from "../services/contact.service";
import { RouteError } from "../models/route-error";
import { Contact } from "midwestern-database";

@injectable()
export class ContactController {

  private router: Router;

  constructor(
    @inject(TYPES.ExpressApplication) app: Application,
    @inject(SERVICE_TYPES.ContactService) private contactService: IContactService,
  ) {
    this.router = Router();
    this.router
      .get('/', this.getAllContacts)
      .get('/:contactId', this.getContact)
      .post('/', this.addContact)

    app.use('/api/contact', this.router);
  }

  getContact = (req: Request, res: Response, next: any) => {
    if (!req.params.contactId) return next(new RouteError('contactId is required', 400));
    const contactId: number = +req.params.contactId;
    if (isNaN(contactId)) return next(new RouteError('contactId must be a number', 400));
    return this.contactService.getContact(contactId)
      .then(contact => res.json(contact))
      .catch((ex: Error) => next(new RouteError(ex.message, 500)));
  }

  getAllContacts = (_req: Request, res: Response, next: any) => {
    return this.contactService.getAllContacts()
      .then(contacts => res.json(contacts))
      .catch((ex: Error) => next(new RouteError(ex.message, 500)));
  }

  addContact = (req: Request, res: Response, next: any) => {
    if (!req.body.email) return next(new RouteError('email is required', 400));
    const contact: Contact = req.body;
    return this.contactService.addContact(contact)
      .then(_ => res.status(201).send())
      .catch((ex: Error) => next(new RouteError(ex.message, 500)));
  }

}