import React from "react";
import "./Tours.css";

import card1 from "../../assets/bariloche.jpg";
import card2 from "../../assets/calafate.jpg";
import card3 from "../../assets/chalten.jpg";
import card4 from "../../assets/ushuaia.jpg";

const Tours = () => {
  return (
    <main className="toursPage">
      <section className="toursSection">
        <article className="cardflexLeft">
          <div
            style={{
              backgroundImage: `url(${card1})`,
              boxShadow: "-10px 10px 0px 3px rgba(0 119 255 / 20%)",
            }}
          />
          <section className="infoCardTours">
            <h2>Bariloche</h2>
            <p>
              Bariloche, un rincón paradisíaco en los Andes argentinos, es un
              destino que combina naturaleza y encanto alpino de manera única.
              Sus lagos cristalinos, como el Nahuel Huapi, ofrecen paisajes de
              postal que puedes explorar en actividades como la navegación y el
              kayak.
            </p>
            <p>
              En invierno, las montañas se visten de blanco y se convierten en
              el escenario perfecto para los amantes de los deportes de nieve,
              con opciones como el esquí y el snowboard. Además, Bariloche es
              famosa por sus deliciosos chocolates suizos y su cerveza
              artesanal, lo que añade un toque culinario a tu experiencia. Ya
              sea paseando por su pintoresco centro, ascendiendo a miradores
              panorámicos o disfrutando de la calidez de su gente, Bariloche te
              cautivará con su belleza y hospitalidad.
            </p>
          </section>
        </article>
        <article className="cardflexRight">
          <div
            style={{
              backgroundImage: `url(${card2})`,
              boxShadow: "10px 10px 0px 3px rgba(0 119 255 / 20%)",
            }}
          />
          <section className="infoCardTours">
            <h2>Calafate</h2>
            <p>
              Calafate, en plena Patagonia Argentina, es una puerta de entrada a
              aventuras extraordinarias en medio de un entorno natural de
              ensueño. El glaciar Perito Moreno, majestuoso e imponente, te
              dejará sin aliento mientras caminas por pasarelas suspendidas
              junto a sus gigantescos hielos.
            </p>
            <p>
              La experiencia de navegar entre icebergs y contemplar el
              deslumbrante azul del glaciar es simplemente inolvidable. Además,
              en los alrededores de Calafate, puedes explorar el Parque Nacional
              Los Glaciares, un santuario de la vida silvestre y paisajes de
              montaña. Calafate te sumerge en la grandeza de la naturaleza y te
              brinda la oportunidad de vivir momentos únicos en uno de los
              destinos más icónicos de la Patagonia.
            </p>
          </section>
        </article>
        <article className="cardflexLeft">
          <div
            style={{
              backgroundImage: `url(${card3})`,
              boxShadow: "-10px 10px 0px 3px rgba(0 119 255 / 20%)",
            }}
          />
          <section className="infoCardTours">
            <h2>Chalten</h2>
            <p>
              El Chaltén, conocido como el pueblo del trekking en Argentina, es
              un paraíso para los amantes del aire libre y la fotografía.
              Rodeado de majestuosas montañas, incluyendo el icónico Fitz Roy,
              este rincón patagónico es ideal para explorar senderos panorámicos
              y vivir aventuras alpinas. Cada paso que das te lleva a paisajes
              de ensueño, con lagos de aguas cristalinas, bosques frondosos y
              glaciares que parecen tocar el cielo.
            </p>
            <p>
              La abundante vida silvestre, desde cóndores majestuosos hasta
              guanacos curiosos, añade un toque especial a tu experiencia. En el
              Chaltén, cada día es una oportunidad para descubrir la belleza
              inexplorada de la región mientras te maravillas con las vistas
              espectaculares que te rodean.
            </p>
          </section>
        </article>
        <article className="cardflexRight">
          <div
            style={{
              backgroundImage: `url(${card4})`,
              boxShadow: "10px 10px 0px 3px rgba(0 119 255 / 20%)",
            }}
          />
          <section className="infoCardTours">
            <h2>Ushuaia</h2>
            <p>
              Ushuaia, la ciudad del fin del mundo, te espera en el extremo sur
              de América, y es un destino que combina naturaleza prístina y
              exploración histórica de manera fascinante. Descubre el Parque
              Nacional Tierra del Fuego, donde puedes caminar por senderos
              rodeados de exuberante vegetación y contemplar la confluencia del
              Atlántico y el Pacífico. Navega por el misterioso Canal Beagle y
              visita la encantadora Isla Martillo para observar pingüinos en su
              hábitat natural.
            </p>
            <p>
              La historia de Ushuaia como antiguo presidio y su legado como
              puerto de exploración antártica se entrelazan en su rica cultura.
              Ushuaia te invita a una aventura épica en un entorno remoto y
              cautivador que quedará grabado en tu memoria para siempre.
            </p>
          </section>
        </article>
      </section>
    </main>
  );
};

export default Tours;
