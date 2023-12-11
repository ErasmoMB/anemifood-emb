import React from "react";
import "./contacto.css"; // Asegúrate de importar tu archivo de estilos CSS si es necesario
import cacao from "../assets/images/Cacao.jpg";
import quinua from "../assets/images/Quinua.jpg";
import harina from "../assets/images/HarinaTrigo.jpg";

function Contacto() {
  return (
    <>
      <section className="tasty_section"></section>
      <div className="container-fluid">
        <div className="row">
          {/* Columna del formulario */}
          <div className="col-md-6">
            <section className="contact_form-container layout_padding">
              <form>
                <div className="form-group">
                  <label htmlFor="nombre">Nombre:</label>
                  <input type="text" className="form-control" id="nombre" />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Correo electrónico:</label>
                  <input type="email" className="form-control" id="email" />
                </div>

                <div className="form-group">
                  <label htmlFor="mensaje">Mensaje:</label>
                  <textarea
                    className="form-control"
                    id="mensaje"
                    rows="4"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">
                  Enviar
                </button>
              </form>
            </section>
          </div>

          {/* Columna del mapa */}
          <div className="col-md-6">
            <section className="map_section">
              <div id="map" className="h-100 w-100">
                <iframe
                  title="Mapa"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.18863458458!2d-77.06824442408298!3d-11.961438040319674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105ce2faecca3bb%3A0x58e2cca241a2e705!2sUniversidad%20de%20Ciencias%20y%20Humanidades!5e0!3m2!1ses-419!2spe!4v1699567527364!5m2!1ses-419!2spe"
                  width="100%"
                  height="500"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </section>
          </div>
        </div>
      </div>

      <section class="fruit_section">
        <div class="container">
          <h2 class="custom_heading">Buenos productos</h2>
          <p class="custom_heading-text">
            Nuestros productos están cuidadosamente seleccionados para
            proporcionar los nutrientes necesarios para combatir la anemia.
          </p>
          <div className="fruit_container">
            <div class="row layout_padding2">
              <div class="col-md-8">
                <div class="fruit_detail-box">
                  <h3>Superalimentos Saludables y Nutritivos</h3>
                  <p class="mt-4 mb-5">
                    Nuestra preocupación principal es la salud de todos los
                    niños de Perú y del Mundo y evitar que la Anemia y la
                    Desnutrición Infantil continúe existiendo en nuestras
                    poblaciones andinas y en el Mundo.
                  </p>
                  <div>
                    <a href="./productos" class="custom_dark-btn">
                      {" "}
                      VER PRODUCTOS{" "}
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-4 d-flex justify-content-center align-items-center">
                <div class="fruit_img-box d-flex justify-content-center align-items-center">
                  <img
                    src={quinua}
                    alt=""
                    class="nutrientes"
                    width="250px"
                    height="150px"
                  />
                </div>
              </div>
            </div>
            <div class="row layout_padding2">
              <div class="col-md-8">
                <div class="fruit_detail-box">
                  <h3>Orgánico, nutritivo y saludable</h3>
                  <p class="mt-4 mb-5">
                    Productos con Ingredientes Naturales y Orgánicos cumpliendo
                    nuestra misión de brindar productos saludables al Perú y al
                    Mundo.
                  </p>
                  <div>
                    <a href="./productos" class="custom_dark-btn">
                      {" "}
                      VER PRODUCTOS{" "}
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-4 d-flex justify-content-center align-items-center">
                <div class="fruit_img-box d-flex justify-content-center">
                  <img
                    src={cacao}
                    alt=""
                    class="nutrientes"
                    width="250px"
                    height="150px"
                  />
                </div>
              </div>
            </div>
            <div class="row layout_padding2">
              <div class="col-md-8">
                <div class="fruit_detail-box">
                  <h3>Hecho con amor</h3>
                  <p class="mt-4 mb-5">
                    Todos nuestros productos están seleccionados con amor y la
                    total preocupación para reducir los índices de Anemia y
                    Desnutrición que existen en nuestro País, Latinoamérica y en
                    el Mundo.
                  </p>
                  <div>
                    <a href="./productos" class="custom_dark-btn">
                      {" "}
                      VER PRODUCTOS{" "}
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-4 d-flex justify-content-center align-items-center">
                <div class="fruit_img-box d-flex justify-content-center align-items-center">
                  <img
                    src={harina}
                    alt=""
                    class="nutrientes"
                    width="250px"
                    height="150px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contacto;
