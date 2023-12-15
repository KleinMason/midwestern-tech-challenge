import { inject, injectable } from "inversify";
import { Contact, IMysqlDataContext } from "midwestern-database";
import { TYPES } from "../composition/app.composition.types";

export interface IContactService {
  getContact: (contactId: number) => Promise<Contact>;
  getAllContacts: () => Promise<Contact[]>;
  addContact: (contact: Contact) => Promise<Contact>;
}

@injectable()
export class ContactService implements IContactService {

  constructor(
    @inject(TYPES.MysqlDataContext) private context: IMysqlDataContext
  ) { }

  getContact = (contactId: number): Promise<Contact> => {
    return this.context.models.contact.findOne({
      identity: 'contactId',
      args: [contactId]
    });
  }

  getAllContacts = (): Promise<Contact[]> => {
    return this.context.models.contact.find();
  }

  addContact = (contact: Contact): Promise<Contact> => {
    return this.context.models.contact.insertOne(contact)
      .then(contactId => this.getContact(contactId));
  }
}