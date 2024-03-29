import React, { useState, useEffect } from "react";
import "./Home.css";
import PlaneIcon from "../../assets/PlaneIcon.png";

import card1 from "../../assets/bariloche.jpg";
import card2 from "../../assets/calafate.jpg";
import card3 from "../../assets/chalten.jpg";
import card4 from "../../assets/ushuaia.jpg";
import { Link } from "react-router-dom";

import { FiCheck } from "react-icons/fi";

const Home = () => {
  const [isMoved, setMoved] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 350) {
      setMoved(true);
    } else {
      setMoved(false);
    }
  };

  return (
    <main>
      <section className="home">
        <div className="backgroundHome"></div>
        <h1 className="sloganHome">
          Viví la experiencia de viajar a la Patagonia.
        </h1>
        <div className={isMoved ? "planeIconActive" : "planeIcon"}>
          <img className="planeImage" src={PlaneIcon} alt="Avión" />
        </div>
      </section>
      <section className="mainPage">
        <section className="whyChooseUs">
          <h2>¿Por qué elegirnos?</h2>
          <div className="boxCenter">
            <article className="boxToRight1">
              <div className="box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-shield-heart"
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#00abfb"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 21a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12.01 12.01 0 0 1 .378 5" />
                  <path d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296z" />
                </svg>
                <h3>Calidad y seguridad</h3>
                <p>
                  Garantizamos altos estándares de calidad y seguridad en todos
                  nuestros servicios de viaje.
                </p>
              </div>
            </article>
            <article className="boxToCenter1">
              <div className="box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-currency-dollar"
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#00abfb"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2" />
                  <path d="M12 3v3m0 12v3" />
                </svg>
                <h3>Relación calidad-precio</h3>
                <p>
                  Brindamos una experiencia de viaje excepcional sin comprometer
                  tu presupuesto.
                </p>
              </div>
            </article>
            <article className="boxToLeft1">
              <div className="box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-user-circle"
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#00abfb"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                  <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                  <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                </svg>
                <h3>Atención personalizada</h3>
                <p>
                  Nuestro equipo de expertos estará a tu disposición para
                  brindarte una atención personalizada y adaptada a tus
                  necesidades.
                </p>
              </div>
            </article>
            <article className="boxToRight2">
              <div className="box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-map-pin-star"
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#00abfb"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M15 11a3 3 0 1 0 -3.908 2.86" />
                  <path d="M11.059 21.25a2 2 0 0 1 -.472 -.35l-4.244 -4.243a8 8 0 1 1 13.646 -6.079" />
                  <path d="M17.8 20.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />
                </svg>
                <h3>Destinos únicos</h3>
                <p>
                  Descubre destinos exclusivos y sorprendentes que te permitirán
                  vivir experiencias inolvidables.
                </p>
              </div>
            </article>
            <article className="boxToCenter2">
              <div className="box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-plant"
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#00abfb"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M7 15h10v4a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2v-4z" />
                  <path d="M12 9a6 6 0 0 0 -6 -6h-3v2a6 6 0 0 0 6 6h3" />
                  <path d="M12 11a6 6 0 0 1 6 -6h3v1a6 6 0 0 1 -6 6h-3" />
                  <path d="M12 15l0 -6" />
                </svg>
                <h3>Responsabilidad ambiental</h3>
                <p>
                  Nos preocupamos por el medio ambiente y promovemos prácticas
                  turísticas respetuosas con la naturaleza.
                </p>
              </div>
            </article>
            <article className="boxToLeft2">
              <div className="box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-mood-smile-beam"
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#00abfb"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18z" />
                  <path d="M10 10c-.5 -1 -2.5 -1 -3 0" />
                  <path d="M17 10c-.5 -1 -2.5 -1 -3 0" />
                  <path d="M14.5 15a3.5 3.5 0 0 1 -5 0" />
                </svg>
                <h3>Satisfacción garantizada</h3>
                <p>
                  Nos esforzamos por superar tus expectativas y asegurarte una
                  experiencia de viaje inolvidable y satisfactoria.
                </p>
              </div>
            </article>
          </div>
        </section>
        <section className="aboutPatagonia">
          <article className="infoAboutPatagonia">
            <div className="imageAboutPatagonia" />
            <section className="infoPatagonia">
              <div className="paragraphInfoPatagonia">
                <h2>La Patagonia</h2>
                <p>
                  La Patagonia Argentina, un vasto y asombroso territorio en el
                  extremo sur del continente americano.
                </p>
                <p>
                  Con paisajes de ensueño, montañas imponentes, glaciares
                  majestuosos y vastas llanuras, este lugar cautiva a los
                  amantes de la naturaleza y la aventura.
                </p>
                <p>
                  Descubre la magia de sus parques nacionales, la riqueza de su
                  flora y fauna, y sumérgete en la cultura de sus pueblos
                  originarios.
                </p>
                <p>
                  ¡Bienvenido a la Patagonia, un destino que te dejará sin
                  aliento!
                </p>
              </div>
            </section>
          </article>
        </section>
        <section className="aboutUs">
          <article className="infoAboutUs">
            <h2>Sobre nosotros</h2>
            <p className="paragraph0">
              Nuestra empresa en la Patagonia ofrece aventuras únicas y
              sostenibles. Con guías expertos y un compromiso con la
              conservación, garantizamos experiencias memorables en este entorno
              natural impresionante.
            </p>
            <p className="paragraph">
              <i><FiCheck size={20} color={"#00abfb"}/></i> Los mejores precios y ofertas.
            </p>
            <p className="paragraph">
            <i><FiCheck size={20} color={"#00abfb"}/></i> Las guías mas completas para tus visitas.
            </p>
            <p className="paragraph">
            <i><FiCheck size={20} color={"#00abfb"}/></i> Packs de viajes con todo incluido.
            </p>
            <div>
            <Link to="/Informacion"><button className="moreInfoButton">Ver mas</button></Link>
            </div>
          </article>
          <article className="imageAboutUs">
            <div className="image1" />
            <div className="image2" />
          </article>
        </section>
        <section className="travels">
          <h2 className="travelsTitle">Nuestros mejores viajes</h2>
          <div className="travelCards">
            <article
              className="card"
              style={{ backgroundImage: `url(${card1})` }}
            >
              <div className="cardContent">
                <h2>Bariloche</h2>
                <Link to="/Viajes"><p>Ver mas</p></Link>
              </div>
            </article>
            <article
              className="card"
              style={{ backgroundImage: `url(${card2})` }}
            >
              <div className="cardContent">
                <h2>Calafate</h2>
                <Link to="/Viajes"><p>Ver mas</p></Link>
              </div>
            </article>
            <article
              className="card"
              style={{ backgroundImage: `url(${card3})` }}
            >
              <div className="cardContent">
                <h2>Chalten</h2>
                <Link to="/Viajes"><p>Ver mas</p></Link>
              </div>
            </article>
            <article
              className="card"
              style={{ backgroundImage: `url(${card4})` }}
            >
              <div className="cardContent">
                <h2>Ushuaia</h2>
                <Link to="/Viajes"><p>Ver mas</p></Link>
              </div>
            </article>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Home;
