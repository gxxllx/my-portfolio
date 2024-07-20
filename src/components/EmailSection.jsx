"use client";
import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };
    const response = await fetch(endpoint, options);

    if (response.status === 500) {
      console.log("Error sending email");
      setEmailSubmitted(false);
    }

    const resData = await response.json();
    console.log(resData);

    if (resData.status === 200) {
      console.log("Email sent successfully!");
      setEmailSubmitted(true);
    }
  };

  const emailStyles = emailSubmitted ? "text-green-500" : "text-red-500";

  const message =
    emailSubmitted === null
      ? ""
      : emailSubmitted
      ? "Email sent successfully!"
      : "There was an error sending the email, please try again later.";

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-80 right-2/4 md:left-28 transform -translate-x-1/2 -translate-1/2 pointer-events-none"></div>
      <div>
        <h5 className="text-xl font-bold text-white my-2">Let&apos; Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m always open to new projects, collaborations, or employment,
          my inbox is always open. Whether for a potential project or just to
          say hi, I&apos;ll try my best to answer your email!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="github.com">
            <FaGithub className="h-9 w-9" />
          </Link>
          <Link href="linkedin.com">
            <FaLinkedin className="h-9 w-9" />
          </Link>
        </div>
      </div>
      <div>
        <form action="" className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="example@mail.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hi!"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block mb-2 text-sm font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Your message here..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-700 hover:duration-200 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
          <div>
            <p className={`${emailStyles} h-12 mt-3`}>{message}</p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
