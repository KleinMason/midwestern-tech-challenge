import ContactForm from "../components/ContactForm";
import Header from "../components/Header";
import "./css/Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <Header link="/" label="home"></Header>
      <div className="half-page-background"></div>
      <div className="row">
        <section className="info col-12 col-md-6">
          <h1>
            <span className="accent">Heading</span> One
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </p>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </section>
        <section className="contact-form col-12 col-md-6">
          <h2>Heading Two</h2>
          <ContactForm></ContactForm>
          {/* <form onSubmit={handleFormSubmit}>
            <div className="row">
              <div className="col-12 col-md-6">
                <input
                  id="inputFirstName"
                  type="text"
                  placeholder="First Name"
                />
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
                <input
                  id="inputEmail"
                  type="text"
                  placeholder="Email"
                  required
                />
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
          </form> */}
        </section>
      </div>
    </div>
  );
};

export default Contact;
