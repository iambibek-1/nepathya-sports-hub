import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMessage,
  faPhone,
  faEnvelope,
  faLocationDot,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "facc7241-ec17-4bf1-bb65-0aada74d970f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          We’d Love to Hear From You! <FontAwesomeIcon icon={faMessage} />
        </h3>
        <p>
          Have questions, feedback, or want to know more about our programs?
          Feel free to reach out through the contact form below! Whether you’re
          interested in joining NEPATHYA SPORTS HUB, learning about our
          facilities, or just need some info, we’re here to help.
        </p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faEnvelope} className="fonts" />
            nepathyacollege@gmail.com
          </li>
          <li>
            <FontAwesomeIcon icon={faPhone} className="fonts" />
            +077420989
          </li>
          <li>
            <FontAwesomeIcon icon={faLocationDot} className="fonts" />
            Tilottama 05, Manigram <br />
            Rupandehi,Nepal
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="name"
            placeholder="Enter your mobile number"
            required
          />
          <label>Write your message here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit now <FontAwesomeIcon className="arrow" icon={faArrowRight} />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
}
