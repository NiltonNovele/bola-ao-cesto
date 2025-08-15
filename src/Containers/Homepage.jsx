import React, { useEffect, useState } from "react";
import { images, data } from "../Constants";
import New from "../Components/New";
import Vedio from "../Components/Vedio";
import { Link } from "react-router-dom";
import { PiArrowRightLight } from "react-icons/pi";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Homepage = () => {
  useEffect(() => {
    document.title = "Bola Ao Cesto";
  }, []);

  // ----- Image Carousel State -----
  const allImages = [
    "/images/placeholder1.jpg",
    "/images/placeholder2.jpg",
    "/images/placeholder3.jpg",
    "/images/placeholder4.jpg",
    "/images/placeholder5.jpg",
    "/images/placeholder6.jpg",
    "/images/placeholder7.jpg",
    "/images/placeholder8.jpg",
  ];
  const [startIndex, setStartIndex] = useState(0);
  const boxesToShow = 4;

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + boxesToShow) % allImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // ----- CountUp trigger when in view -----
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <>
      {/* Hero Section */}
      <div className="w-full relative justify-center">
        <div className="w-full h-[1000px] md:h-[1400px] bg-black z-20">
          <img
            className="w-full h-full object-cover opacity-90"
            src="/hero.jpg"
            alt="Hero"
          />
        </div>
        <div className="absolute top-[250px] left-1/2 transform -translate-x-1/2 flex flex-col items-end gap-10 w-full max-w-[1200px]">
          <h1 className="w-[95%] md:w-full mx-auto text-start font-sans text-3xl md:text-5xl">
            <span className="text-white">Bola</span>{" "}
            <span className="text-green-500">AO</span>
            <span className="font-orbitron block my-8 md:my-3 text-[70px] sm:text-[100px] md:text-[200px] lg:text-[240px] font-bold text-white">
              Cestoooo
            </span>{" "}
            <span className="text-stone-300">We are balling!!</span>
          </h1>
        </div>
      </div>

      {/* Quem Somos / Missão Section */}
      <section className="w-full bg-white2 relative overflow-hidden py-20">
        <div className="bg-royal-blue opacity-10 w-[600px] h-[600px] absolute -top-[150px] -left-[100px] rounded-full"></div>
        <div className="max-w-[1440px] mx-auto px-5 md:px-20 flex flex-col md:flex-row gap-16 items-center">
          {/* Text Column */}
          <div className="flex-1 flex flex-col gap-8">
            <h2 className="font-orbitron text-4xl md:text-5xl text-royal-blue">
              Quem Somos?
            </h2>
            <ul className="list-disc list-inside font-anek text-lg space-y-2 text-black/80">
              <li>
                Responsáveis pela organização da Liga Nacional de 3x3, liderando
                toda a sua estruturação e realização.
              </li>
              <li>
                Promovemos torneios intensivos de 1x1, que revelam e desenvolvem
                talentos individuais.
              </li>
              <li>
                Estamos acreditados pela FIBA África, assegurando alinhamento
                com os mais altos padrões técnicos e institucionais.
              </li>
              <li>
                Organizamos eventos dinâmicos, inclusivos e tecnicamente
                reconhecidos, com foco no crescimento sustentável do basquetebol
                moçambicano.
              </li>
            </ul>

            <h3 className="font-orbitron text-3xl text-royal-blue mt-6">
              Missão e Objetivos
            </h3>
            <ul className="list-disc list-inside font-anek text-lg space-y-2 text-black/80">
              <li>
                Torneios 1x1 - Realizar 2 eventos anuais em diferentes
                províncias para descobrir e desenvolver talentos.
              </li>
              <li>
                Liga 3x3 - Realizar uma temporada anual da Liga Nacional de 3x3,
                com participação de pelo menos 16 equipas regionais.
              </li>
              <li>
                Conformidade com a FIBA África - Assegurar que 100% dos eventos
                estejam de acordo com os regulamentos internacionais.
              </li>
              <li>
                Expansão regional - Introduzir o formato 3x3 em pelo menos duas
                novas províncias.
              </li>
              <li>
                Atração de investimento - Criar oportunidades para
                patrocinadores, transmissões locais e ativações de marca.
              </li>
            </ul>
          </div>

          {/* Image Carousel Column */}
          <div className="flex-1 grid grid-cols-2 gap-4">
            {Array.from({ length: boxesToShow }).map((_, idx) => {
              const imgIndex = (startIndex + idx) % allImages.length;
              return (
                <div
                  key={idx}
                  className="w-full h-[200px] md:h-[300px] bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center"
                >
                  <img
                    src={allImages[imgIndex]}
                    alt={`Slide ${imgIndex + 1}`}
                    className="object-cover h-full w-full transition duration-500"
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Resultados Section */}
        <div ref={ref} className="max-w-[1440px] mx-auto px-5 md:px-20 mt-20">
          <h2 className="font-orbitron text-4xl md:text-5xl text-royal-blue text-center mb-12">
            1ª Edição - Resultados
          </h2>
          <p className="text-center font-anek text-lg mb-10">
            8 de Junho, 2025, Pavilhão da A Politécnica, Maputo
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div className="bg-yellow/20 rounded-xl p-8">
              <h3 className="font-orbitron text-3xl text-royal-blue mb-2">
                Bilhetes Vendidos
              </h3>
              <p className="text-4xl md:text-5xl font-bold text-black">
                {inView && <CountUp start={0} end={750} duration={2} />}
              </p>
              <p className="font-anek text-black/70">
                Total de bilhetes vendidos
              </p>
            </div>

            <div className="bg-green-200/30 rounded-xl p-8">
              <h3 className="font-orbitron text-3xl text-royal-blue mb-2">
                Receita do Bar
              </h3>
              <p className="text-4xl md:text-5xl font-bold text-black">
                {inView && (
                  <CountUp start={0} end={51728} duration={2} separator="," />
                )}{" "}
                MZN
              </p>
              <p className="font-anek text-black/70">Arrecadados no bar</p>
            </div>

            <div className="bg-blue-200/30 rounded-xl p-8">
              <h3 className="font-orbitron text-3xl text-royal-blue mb-2">
                Feira Gastronómica
              </h3>
              <p className="text-4xl md:text-5xl font-bold text-black">
                {inView && (
                  <CountUp start={0} end={48000} duration={2} separator="," />
                )}{" "}
                MZN
              </p>
              <p className="font-anek text-black/70">Vendas na feira</p>
            </div>
          </div>

          <p className="text-center font-anek text-black/70 mt-10">
            O evento demonstrou forte envolvimento do público e excelente
            potencial comercial. Também teve visibilidade mediática
            significativa, com aparição no canal nacional TV Sucesso.
          </p>
        </div>
      </section>

      {/* Sponsors Section */}
      <div className="w-full py-20 bg-white flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-orbitron text-royal-blue mb-12 text-center">
          Sponsors
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="flex justify-center items-center p-4 border rounded-lg shadow-sm"
            >
              <img
                src={`/parceiros/logo${i}.png`}
                alt={`Sponsor ${i}`}
                className="h-16 object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Best Plays & Funny Videos */}
      <div className="w-full bg-bg1">
        <div className="max-w-[1440px] h-auto px-[20px] py-[50px] md:p-[100px] flex gap-[20px] flex-col mx-auto">
          <h3 className="font-orbitron text-royal-blue text-3xl capitalize">
            Destaques
          </h3>
          <p>NBA has announced some new informations</p>
          <div className="container w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
            {data.Vedio.map((ved, id) => (
              <Vedio vedioId={ved.videoId} title={ved.title} key={id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
