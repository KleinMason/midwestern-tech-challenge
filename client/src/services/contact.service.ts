import { Contact } from "../models/contact.model";
import { ApiService } from "./api.service";

export interface IContactService {
  addContact: (contact: Contact) => Promise<void>;
}

export class ContactService extends ApiService implements IContactService {

  protected get apiBaseUri(): string {
    return this.baseUri;
  }

  private baseUri: string;

  constructor() {
    super();
    this.baseUri = "http://localhost:3000/api/contact";
  }

  addContact = async (contact: Contact): Promise<void> => {
    const headers = new Headers([['Content-Type', 'application/json']]);
    return this.post('', contact, headers)
      .then(status => {
        if (status !== 201) {
          throw new Error(`Failed to add contact. Status: ${status}`);
        }
      })
      .catch(err => {
        throw new Error(err);
      });
  }
}