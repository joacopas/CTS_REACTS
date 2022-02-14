import React from "react";
import "./Contacto.css";

function Contacto() {
  return (
    <div className="contactForm">
      <h2>Contacto</h2>
      <div className="">
        <div className="mb-3 mt-3">
          <label
            for="exampleFormControlInput1"
            className="form-label float-start"
          >
            Nombre
          </label>
          <input
            type="name"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Nombre Apellido"
          />
        </div>
        <div className="mb-3 mt-3">
          <label
            for="exampleFormControlInput1"
            className="form-label float-start"
          >
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-5">
          <label
            for="exampleFormControlTextarea1"
            className="form-label float-start"
          >
            Preguntanos
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            spellcheck="false"
          ></textarea>
        </div>
        <input className="btnSubmit " type="submit" value="Enviar"></input>
      </div>
    </div>
  );
}

export default Contacto;
