import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact</h1>
      <h3>Welcome to the Contact page!</h3>
      <p>
        This is the contact page of our website. Here you can find our contact
        information and get in touch with us.
      </p>
      <p>
        <NavLink to="/">Go back to Home</NavLink>
      </p>
    </div>
  );
};

export default Contact;
