import React from "react";
import "./home.css";
import banner from "../assets/images/banner.png";
import icono1 from "../assets/images/icono1.png";
import icono2 from "../assets/images/icono2.png";
import icono3 from "../assets/images/icono3.png";
import doctora from "../assets/images/doctora.png";
import veterinario from "../assets/images/veterinario.png";
const Home = () => {
  return (
    <div className="main_content">
      <section className="slider_section position-relative">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="slider_item-box">
                <div className="slider_item-container">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="slider_item-detail">
                          <h1>Bienvenido a Anemifood</h1>
                          <p>
                            En Anemifood, nos dedicamos apasionadamente a
                            proporcionar productos de alta calidad que combaten
                            la anemia. Nuestra misión es mejorar la salud y el
                            bienestar de nuestros clientes, brindando soluciones
                            efectivas y naturales para combatir esta condición.
                          </p>
                          <div className="d-flex">
                            <a
                              href="/productos"
                              className="text-uppercase custom_orange-btn mr-3"
                            >
                              VER PRODUCTOS
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="slider_img-box">
                          <div>
                            <img src={banner} alt="" className="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 className="font-weight-bold titulo_landingpage">
                GUIA DEFINITIVA PARA UNA DIETA ANTI-ANEMIA
              </h1>
              <p>
                "En AnemiFood, hemos establecido un compromiso inquebrantable"{" "}
                <br />
                Ayudarte a vencer la anemia y recuperar tu vitalidad. ¿Cómo lo
                logramos? Nuestra gama de productos está respaldada por una
                cuidadosa selección de nutrientes esenciales y un enfoque basado
                en la ciencia que te brinda soluciones efectivas. Te ofrecemos
                la oportunidad de descubrir cómo la salud y la vitalidad pueden
                ser una realidad en tu vida, y todo comienza aquí. <br />
                ¡Únete a nosotros en este viaje hacia un bienestar renovado!
                Descarga ahora nuestra 'Guía Definitiva para una dieta
                Anti-Anemia' y descubre las claves para combatir la anemia de
                manera efectiva. Obtén consejos nutricionales, recetas
                saludables y toda la información que necesites para recuperar tu
                energía y vitalidad.
                <br /> <br />
                Nuestra guía te proporcionará respuestas a tus preguntas y te
                ayudará a tomar el control de tu salud. No dejes que la anemia
                te detenga. Únete a la comunidad de AnemiFood y descubre un
                camino hacia una vida más saludable y llena de energía. <br />
              </p>
              <h4 style={{ textAlign: "center" }} className="font-italic frase">
                ¡REGÍSTRATE A CONTINUACIÓN Y DESCARGA TU GUÍA GRATIS PARA
                EMPEZAR TU VIAJE HACIA UNA VIDA SIN ANEMIA Y LLENA DE VITALIDAD!
              </h4>
            </div>

            <div className="col-md-6 form_landingpage">
              <h1>¡Registrate y Comienza tu Transformacion! </h1>
              <form action="">
                <div className="container mt-5">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control mx-auto"
                          placeholder="Nombre"
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="email"
                          className="form-control mx-auto"
                          placeholder="Email"
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="password"
                          className="form-control mx-auto"
                          placeholder="Contraseña"
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control mx-auto"
                          placeholder="Mensaje"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mx-auto">
                      <div className="mb-3">
                        <button
                          type="submit"
                          className="btn btn-dark btn-block"
                          style={{ width: "100%" }}
                        >
                          Regístrate
                        </button>
                      </div>
                      <div className="mb-3">
                        <button
                          type="submit"
                          className="btn btn-dark btn-block"
                          style={{ width: "80%" }}
                        >
                          Descarga
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="service_section layout_padding">
        <div className="container">
          <h2 className="custom_heading">¿Qué nos hace diferentes?</h2>
          <p className="custom_heading-text">
            Con ingredientes naturales y de alta calidad, estamos comprometidos
            con la salud y bienestar de nuestros clientes.
          </p>
          <div className="layout_padding2">
            <div className="card-deck">
              <div className="card">
                <img
                  className="card-img-top"
                  src={icono1}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Antianémicas</h5>
                  <p className="card-text">
                    Contribuye a elevar los niveles de Hemoglobina. Elimina la
                    Anemia en niños, consumiendo las galletas durante 1 mes.
                    Recomendado para Madres Gestantes.
                  </p>
                </div>
              </div>
              <div className="card">
                <img
                  className="card-img-top"
                  src={icono2}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Natural</h5>
                  <p className="card-text">
                    Nuestras galletas contienen ingredientes naturales como
                    Quinua, Kiwicha, Cacao Orgánico, Cúrcuma, DHA, Proteínas,
                    Hierro, Algas, Cañihua y más.
                  </p>
                </div>
              </div>
              <div className="card">
                <img
                  className="card-img-top"
                  src={icono3}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Saludables</h5>
                  <p className="card-text">
                    Todos los Productos Nutri H son totalmente saludables y
                    recomendados para la salud. Ideal para su consumo durante el
                    día y para todas las edades.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="client_section layout_padding">
        <div className="container testimonios">
          <h2 className="custom_heading">Testimonios</h2>
          <p className="custom_heading-text">
            Testimonios de personas que han experimentado la diferencia con
            AnemiFood
          </p>
          <div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="client_container layout_padding2">
                  <div className="client_img-box">
                    <img src={veterinario} alt="" />
                  </div>
                  <div className="client_detail">
                    <h3>Rodrigo</h3>
                    <p className="client_detail-text">
                      Los productos de AnemiFood han marcado la diferencia en mi
                      vida. Han sido una parte fundamental en mi lucha contra la
                      anemia. ¡Altamente recomendados!
                      <br />
                      Si deseas comprar productos de alta calidad que realmente
                      marquen la diferencia en tu lucha contra la anemia,
                      definitivamente te recomiendo AnemiFood.
                    </p>
                  </div>
                </div>
                <div className="client_container layout_padding2">
                  <div className="client_img-box">
                    <img src={doctora} alt="" />
                  </div>
                  <div className="client_detail">
                    <h3>Carla</h3>
                    <p className="client_detail-text">
                      Los productos de AnemiFood han marcado la diferencia en mi
                      vida. Han sido una parte fundamental en mi lucha contra la
                      anemia. ¡Altamente recomendados!
                      <br />
                      Si deseas comprar productos de alta calidad que realmente
                      marquen la diferencia en tu lucha contra la anemia,
                      definitivamente te recomiendo AnemiFood.
                    </p>
                  </div>
                </div>
                <div className="client_container layout_padding2">
                  <div className="client_img-box">
                    <img src={veterinario} alt="" />
                  </div>
                  <div className="client_detail">
                    <h3>Juan</h3>
                    <p className="client_detail-text">
                      Los productos de AnemiFood han marcado la diferencia en mi
                      vida. Han sido una parte fundamental en mi lucha contra la
                      anemia. ¡Altamente recomendados!
                      <br />
                      Si deseas comprar productos de alta calidad que realmente
                      marquen la diferencia en tu lucha contra la anemia,
                      definitivamente te recomiendo AnemiFood.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
