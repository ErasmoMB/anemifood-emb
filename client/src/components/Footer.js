import React from "react";
import "./footer.css";
import ministerio from "../assets/images/ministerio.jpg";
import uch from "../assets/images/uch.png";
import twitter from "../assets/images/twitter.png";
import instagram from "../assets/images/instagram.png";
import fb from "../assets/images/fb.png";

function Footer() {
  return (
    <section className="container-fluid footer_section">
      <section className="info_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h5>Productos</h5>
              <ul className="detalles">
                <li>Suplementos nutricionales</li>
                <li>Galletas fortificadas</li>
                <li>Cereales enriquecidos</li>
                <li>Frutas y verduras frescas</li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>Nuestros Servicios</h5>
              <ul className="detalles">
                <li>Asesoramiento nutricional personalizado</li>
                <li>Productos especializados para combatir la anemia</li>
                <li>Envíos rápidos y seguros a todo el país</li>
                <li>Atención al cliente las 24 horas</li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>Nuestra Lista</h5>
              <ul className="detalles">
                <li>Productos naturales y saludables</li>
                <li>Suplementos ricos en hierro</li>
                <li>Galletas fortificadas</li>
                <li>Alimentos enriquecidos con nutrientes esenciales</li>
                <li>Supervisión médica en cada etapa del proceso</li>
              </ul>
            </div>
            <div className="col-md-3">
              <div className="social_container">
                <h5>Síguenos</h5>
                <div className="social-box">
                  <a href="">
                    <img src={fb} alt="" />
                  </a>
                  <a href="">
                    <img src={twitter} alt="" />
                  </a>
                  <a href="">
                    <img src={instagram} alt="" />
                  </a>{" "}
                  <br /> <br />
                  <h5>Derechos</h5>
                  <div className="derechos">
                    <a href="https://www.gob.pe/minsa" target="_blank">
                      <img src={ministerio} alt="Ministerio de Salud" />
                    </a>
                    <a href="https://www.uch.edu.pe/" target="_blank">
                      <img
                        src={uch}
                        alt="Universidad de Ciencias y Humanidades"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <p>
        Copyright &copy; 2023 Todos los derechos reservados por Ministerio de
        Salud del Perú
      </p>
    </section>
  );
}

export default Footer;
