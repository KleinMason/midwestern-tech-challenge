import { FormEvent } from "react";
import Button from "./Button";
import "./css/ContactForm.css";

const ContactForm = () => {
  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    alert("hi");
  };

  return (
    <div className="contact-form">
      <form onSubmit={handleFormSubmit}>
        <div className="row">
          <div className="col-12 col-md-6">
            <input id="inputFirstName" type="text" placeholder="First Name" />
          </div>
          <div className="col-12 col-md-6">
            <input id="inputLastName" type="text" placeholder="Last Name" />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            <input id="inputTitle" type="text" placeholder="Title" />
          </div>
          <div className="col-12 col-md-6">
            <input id="inputEmail" type="text" placeholder="Email" required />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <textarea
              name="message"
              id="inputMessage"
              placeholder="Message"
              rows={10}></textarea>
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <Button label="Submit" onClick={() => {}}></Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
