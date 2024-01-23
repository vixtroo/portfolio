import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      };

      await emailjs.send(
        "service_e9g4wcq",
        "template_40bclqq",
        templateParams,
        "K-d0fTm-8nMbhsvvZ"
      );

      console.log("Email sent successfully");
      alert("Email sent successfully");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email", error);
      alert("Error sending email");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col items-center p-4 mx-10 border-2 border-slate-500 rounded-xl">
        <h1 className="text-2xl font-bold tracking-wide">Email me</h1>
        <div className="flex flex-col flex-wrap content-center justify-center p-4 gap-y-4">
          <label htmlFor="name" style={{ position: "relative" }}>
            <input
              type="text"
              id="name"
              placeholder="Name (Optional)"
              style={{ paddingLeft: "40px" }}
              onChange={handleChange}
              value={formData.name}
            />
            <FontAwesomeIcon
              icon={faUser}
              style={{
                position: "absolute",
                left: "15px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "gray",
              }}
            />
          </label>
          <label htmlFor="email" style={{ position: "relative" }}>
            <input
              type="text"
              id="email"
              placeholder="Email"
              style={{ paddingLeft: "40px" }}
              onChange={handleChange}
              value={formData.email}
              required
            />
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{
                position: "absolute",
                left: "15px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "gray",
              }}
            />
          </label>
          <label htmlFor="message" style={{ position: "relative" }}>
            <textarea
              placeholder="Message"
              id="message"
              name="message"
              rows="4"
              cols="30"
              className="pl-3 py-[15px] rounded-xl"
              style={{ paddingLeft: "15px", padding: "15px 0 15px 15px" }}
              onChange={handleChange}
              value={formData.message}
              required
            />
          </label>
          <button
            className="flex flex-wrap content-center justify-center duration-100 delay-100 border-2 border-blue-300 hover:bg-blue-300 bg-slate-900 text-neutral-200 hover:border-slate-800 rounded-xl hover:text-zinc-900"
            type="submit"
          >
            Send Message
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
