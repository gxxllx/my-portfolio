import React from "react";
import { Resend } from "resend";
import ReactDOMServer from "react-dom/server";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

const sendEmail = async (req, res) => {
  const { email, subject, message } = req.body;

  const emailHtml = ReactDOMServer.renderToStaticMarkup(
    <React.Fragment>
      <h1>{subject}</h1>
      <p>Thank you for contacting us!</p>
      <p>New message submitted:</p>
      <p>{message}</p>
    </React.Fragment>
  );

  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: ["guillecom04@gmail.com", email],
      subject: subject,
      html: emailHtml,
    });
    if (error) {
      return res.status(400).json(error);
    }

    res.status(200).json(data);
  } catch (error) {
    return res.json({ error }, { status: 500 });
  }
};

export default sendEmail;
