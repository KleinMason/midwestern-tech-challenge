import { FormEvent, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import Button from "./Button";
import "./css/ContactForm.css";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-12 col-md-6">
            <input {...register("firstName")} placeholder="First Name" />
          </div>
          <div className="col-12 col-md-6">
            <input {...register("lastName")} placeholder="Last Name" />
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
