import { useEffect, useState } from "react";
import ContactForm from "../components/ContactForm";
import Header from "../components/Header";
import { IPageContent } from "../models/page-content.model";
import { ContactService } from "../services/contact.service";
import { IContentService } from "../services/content.service";
import "./css/Contact.css";

interface Props {
  contentService: IContentService;
}

const Contact = ({ contentService }: Props) => {
  const [contactContent, setContactContent] = useState<IPageContent>();

  useEffect(() => {
    contentService
      .getContactPageContent()
      .then((contactContent) => setContactContent(contactContent))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="contact">
      <Header link="/" label="home"></Header>
      <div className="half-page-background"></div>
      <div className="row">
        <section className="info col-12 col-md-6">
          {!!contactContent && (
            <>
              <h1>{contactContent.title}</h1>
              <p>{contactContent.content}</p>
            </>
          )}
        </section>
        <section className="contact-form col-12 col-md-6">
          <h2>Heading Two</h2>
          <ContactForm contactService={new ContactService()}></ContactForm>
        </section>
      </div>
    </div>
  );
};

export default Contact;
