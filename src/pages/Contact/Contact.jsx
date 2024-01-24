import React from "react";
import "./Contact.css";
import Form from "../../components/Form/Form";

const Contact = () => {
  return (
  <main className="contactPage">
    <section className="form">
    <h2>¿Tenes alguna pregunta? ¡No dudes en consultarnos por mail!</h2>
    <Form/>
    </section>
  </main>
)};

export default Contact;
