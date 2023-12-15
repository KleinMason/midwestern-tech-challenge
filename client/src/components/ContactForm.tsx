import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { Contact } from "../models/contact.model";
import { IContactService } from "../services/contact.service";
import Button from "./Button";
import "./css/ContactForm.css";

interface Props {
  contactService: IContactService;
}

const ContactForm = ({ contactService }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (data: FieldValues) => {
    if (!isValid) return;
    setIsLoading(true);
    const contact: Contact = {
      first_name: data.first_name,
      last_name: data.last_name,
      title: data.title,
      email: data.email,
      message: data.message
    };
    contactService
      .addContact(contact)
      .then((_) => {
        alert("Thank you for your submission!");
        reset();
      })
      .catch((_) => alert("Failed to submit form. Please try again later."))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-12 col-md-6">
            <input {...register("first_name")} placeholder="First Name" />
          </div>
          <div className="col-12 col-md-6">
            <input {...register("last_name")} placeholder="Last Name" />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            <input {...register("title")} placeholder="Title" />
          </div>
          <div className="col-12 col-md-6">
            <input
              {...register("email", {
                required: "Please enter your email"
              })}
              placeholder="Email"
              type="email"
              className={errors.email && "error"}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <textarea
              {...register("message")}
              placeholder="Message"
              rows={10}></textarea>
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <Button
              label={isLoading ? "Submitting form..." : "Submit"}
              onClick={() => {}}
              disabled={isLoading}></Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
