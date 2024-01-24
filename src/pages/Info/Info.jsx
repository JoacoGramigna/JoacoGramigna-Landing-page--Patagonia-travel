import React from "react";
import "./Info.css";

import { LiaMapMarkedAltSolid } from "react-icons/lia";
import { CgTrees } from "react-icons/cg";
import { BsListStars } from "react-icons/bs";

import Form from "../../components/Form/Form";

const Info = () => {
  return (
    <main className="infoPage">
      <article className="infoPageArticle">
        <section className="infoPageSection">
          <h1>¿Porque somos los mejores?</h1>
          <section className="cardsInfoArticles">
            <article>
              <i>
                <LiaMapMarkedAltSolid size={70} color={"#00abfb"} />
              </i>
              <p>
                Patagonia Travel tiene acceso privilegiado a las localidades más
                espectaculares de la región. Gracias a sus relaciones sólidas y
                experiencia, llevan a los viajeros a lugares exclusivos y menos
                concurridos, permitiéndoles disfrutar al máximo de la belleza
                natural y evadir las multitudes.
              </p>
            </article>
            <article>
              <i>
                <CgTrees size={70} color={"#00abfb"} />
              </i>
              <p>
                La empresa se compromete con la sostenibilidad, colaborando con
                organizaciones locales y aplicando prácticas respetuosas con el
                medio ambiente en sus tours, asegurando viajes responsables y un
                mínimo impacto en los ecosistemas patagónicos.
              </p>
            </article>
            <article>
              <i>
                <BsListStars size={70} color={"#00abfb"} />
              </i>
              <p>
                Patagonia Travel cuenta con expertos locales que han explorado
                la región durante años, garantizando itinerarios que capturan la
                auténtica esencia de la Patagonia para experiencias únicas y
                enriquecedoras.
              </p>
            </article>
          </section>
        </section>
        <section className="contactFormSection">
          <h2>¿Tenes alguna pregunta? ¡No dudes en consultarnos por mail!</h2>
          <Form />
        </section>
      </article>
    </main>
  );
};

export default Info;
