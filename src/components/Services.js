import React from "react";
import Title from "./Title";
import services from "../constants/services";

const Services = () =>
  <section className="section bg-grey">
    <Title title="services section" />
    <div className="section-center services-center">
      {services.map(
        service => {
          const { id, icon, title, text } = service;
          return <article key={id} className="service">
            {icon}
            <h4>{title}</h4>
            <div className="underline" />
            <p>{text}</p>
          </article>;
        }
      )}
    </div>
  </section>;

export default Services;
