// Homepage.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PiArrowRightLight } from "react-icons/pi";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Homepage = () => {
  useEffect(() => {
    document.title = "Bola Ao Cesto";
  }, []);

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

  const boxesToShow = 4;
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + boxesToShow) % allImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
    }),
  };

  const cardHover = {
    rest: { scale: 1 },
    hover: { scale: 1.03, transition: { duration: 0.25 } },
  };

  return (
    <>
      <section className="relative w-full h-[100vh] overflow-hidden">
  <img
    src="/hero.jpg"
    alt="Hero - Bola Ao Cesto"
    className="absolute inset-0 w-full h-full object-cover brightness-[0.65]"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/70 animate-gradient-slow" />

  <div className="relative max-w-[1200px] mx-auto px-6 h-full flex flex-col justify-center z-10 text-center md:text-left">
    <motion.hgroup
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="space-y-4 md:space-y-6"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-4xl md:text-5xl font-medium text-white"
      >
        Bola <span className="text-green-400">AO</span>
      </motion.h2>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="font-orbitron text-[80px] sm:text-[100px] md:text-[150px] leading-[0.85] font-black tracking-tight text-white drop-shadow-xl"
      >
        Cestooo
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="text-white/90 text-lg md:text-xl max-w-xl mx-auto md:mx-0"
      >
        Celebrando o basquetebol moçambicano — torneios, talentos e momentos inesquecíveis.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="mt-8 flex flex-wrap justify-center md:justify-start gap-4"
      >
        <Link
          to="/bilhetes"
          className="inline-flex items-center gap-3 bg-blue-500  text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Comprar Bilhetes <PiArrowRightLight />
        </Link>

        <Link
          to="/momentos"
          className="inline-flex items-center gap-2 border border-white/20 px-5 py-3 rounded-lg text-white hover:bg-white/10 hover:scale-105 transition-transform duration-300"
        >
          Momentos da BAC
        </Link>
      </motion.div>
    </motion.hgroup>

    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
      <span className="block w-1 h-3 rounded-full bg-white mb-1"></span>
      <span className="block w-1 h-3 rounded-full bg-white mb-1"></span>
      <span className="block w-1 h-3 rounded-full bg-white"></span>
      <p className="text-white/70 text-sm mt-2">Arrasta</p>
    </div>
  </div>

  <style jsx>{`
    @keyframes gradientMove {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    .animate-gradient-slow {
      background-size: 200% 200%;
      animation: gradientMove 15s ease infinite;
    }
  `}</style>
</section>


      <section className="relative bg-white2 py-24 overflow-hidden">
  <div className="absolute -top-40 -left-20 w-[600px] h-[600px] rounded-full bg-royal-blue opacity-10 blur-3xl animate-slow-spin" />

  <div className="max-w-[1440px] mx-auto px-6 md:px-20 grid md:grid-cols-2 gap-16 items-start">
    
    <div className="space-y-8">
      <h2 className="font-orbitron text-4xl md:text-5xl text-royal-blue">
        Quem Somos?
      </h2>

      <p className="text-black/85 text-lg md:text-xl leading-relaxed">
        Somos responsáveis pela organização da <strong>Liga Nacional de 3x3</strong>, liderando toda a sua estruturação e realização.  
        Promovemos torneios intensivos de <strong>1x1</strong> que revelam e desenvolvem talentos individuais.  
        Estamos acreditados pela <strong>FIBA África</strong>, garantindo alinhamento com os mais altos padrões técnicos e institucionais.  
        Organizamos eventos dinâmicos, inclusivos e tecnicamente reconhecidos, com foco no crescimento sustentável do basquetebol moçambicano.
      </p>

      <h3 className="font-orbitron text-3xl text-royal-blue pt-4">
        Missão & Objetivos
      </h3>

      <ul className="space-y-3">
        {[
          "Torneios 1x1 — Realizar 2 eventos anuais para descobrir talentos.",
          "Liga 3x3 — Uma temporada anual com pelo menos 16 equipas regionais.",
          "Conformidade — 100% dos eventos alinhados com regulamentos FIBA África.",
          "Expansão — Introduzir o formato 3x3 em 2 novas províncias.",
          "Investimento — Criar oportunidades para patrocinadores e transmissões.",
        ].map((item, idx) => (
          <li key={idx} className="flex items-start gap-3 text-black/80 text-lg md:text-xl">
            <span className="mt-1 w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></span>
            {item}
          </li>
        ))}
      </ul>
    </div>

    <div className="grid grid-cols-2 gap-4">
      {Array.from({ length: boxesToShow }).map((_, idx) => {
        const imgIndex = (startIndex + idx) % allImages.length;
        return (
          <div
            key={idx}
            className="h-[220px] md:h-[300px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform duration-500 hover:scale-105"
          >
            <img
              src={allImages[imgIndex]}
              alt={`Basquetebol ${imgIndex}`}
              className="w-full h-full object-cover"
            />
          </div>
        );
      })}
    </div>
  </div>

  <div ref={ref} className="max-w-[1440px] mx-auto px-6 md:px-20 mt-24">
    <h2 className="font-orbitron text-4xl md:text-5xl text-royal-blue text-center mb-16">
      Marketing & Publicidade
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      <div className="rounded-2xl p-8 bg-yellow-100/30 shadow-lg hover:shadow-2xl transition-all duration-300 text-center">
        <h3 className="font-orbitron text-2xl text-royal-blue mb-3">Visualizações Totais</h3>
        <p className="text-5xl font-bold text-black">
          {inView ? <CountUp start={0} end={433517} duration={2} separator="," /> : "0"}
        </p>
      </div>

      <div className="rounded-2xl p-8 bg-green-100/30 shadow-lg hover:shadow-2xl transition-all duration-300 text-center">
        <h3 className="font-orbitron text-2xl text-royal-blue mb-3">Contas Únicas</h3>
        <p className="text-5xl font-bold text-black">
          {inView ? <CountUp start={0} end={40884} duration={2} separator="," /> : "0"}
        </p>
      </div>

      <div className="rounded-2xl p-8 bg-blue-100/30 shadow-lg hover:shadow-2xl transition-all duration-300 text-center">
        <h3 className="font-orbitron text-2xl text-royal-blue mb-3">Conteúdo Mais Visto</h3>
        <p className="text-5xl font-bold text-black">33.624</p>
      </div>
    </div>

    <p className="text-center text-black/70 mt-10 max-w-3xl mx-auto leading-relaxed text-lg">
      Entre 14 de Março e 11 de Junho, o Instagram oficial (@bac_1v1) registou 433.517 visualizações e alcançou 40.884 contas únicas.  
      Os stories representaram 35,6% das visualizações, reels 33,8% e posts 29,8% — revelando uma estratégia equilibrada.  
      65,9% das visualizações foram de não seguidores, demonstrando forte capacidade de alcance orgânico.  
      Vários conteúdos ultrapassaram 10.000 views, com destaque para um vídeo de 33.624 visualizações — reforçando o valor para patrocinadores.
    </p>
  </div>

  <style jsx>{`
    @keyframes slowSpin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    .animate-slow-spin {
      animation: slowSpin 60s linear infinite;
    }
  `}</style>
</section>


      <section className="py-20 bg-gradient-to-b from-white to-white2">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="font-orbitron text-4xl text-royal-blue text-center mb-14">
            Champions — Edições
          </h2>

          <div className="grid gap-10 grid-cols-1 md:grid-cols-3">

            <motion.article
              className="rounded-lg bg-white shadow-md border p-6 flex flex-col justify-between"
              variants={cardHover}
              initial="rest"
              whileHover="hover"
            >
              <img
                src="/players/63.jpg"
                alt="Vencedor da 1ª edição"
                className="rounded-lg w-full h-48 object-cover mb-4"
              />
              <div>
                <div className="flex justify-between items-center">
                  <h3 className="font-orbitron text-xl">1ª Edição</h3>
                  <span className="text-sm text-black/60">Realizada</span>
                </div>
                <p className="mt-3 text-black/80">Campeão: <strong>João José Júnior</strong></p>
                <p className="mt-1 text-black/70">Data: 8 Junho 2025 </p>
              </div>
              <div className="mt-6 flex gap-3">
                <Link to="/momentos" className="px-4 py-2 rounded-lg border hover:bg-black/5 transition">
                  Ver Momentos
                </Link>
              </div>
            </motion.article>

            <motion.article
              className="rounded-lg bg-white shadow-md border p-6 flex flex-col justify-between"
              variants={cardHover}
              initial="rest"
              whileHover="hover"
            >
              <img
                src="/players/2.png"
                alt="Vencedor 2ª edição"
                className="rounded-lg w-full h-48 object-cover mb-4"
              />
              <div>
                <div className="flex justify-between items-center">
                  <h3 className="font-orbitron text-xl">2ª Edição</h3>
                  <span className="text-sm text-black/60">Realizada</span>
                </div>
                <p className="mt-3 text-black/80">Campeão: <strong>Helton Benny</strong></p>
                <p className="mt-1 text-black/70">Data: 31 Agosto 2025 </p>
              </div>
              <div className="mt-6 flex gap-3">
                <Link to="/momentos" className="px-4 py-2 rounded-lg bg-royal-blue text-white hover:brightness-110 transition">
                  Ver Momentos
                </Link>
              </div>
            </motion.article>

            <motion.article
              className="rounded-lg bg-gradient-to-br from-black/5 to-white shadow-md border-dashed border-2 border-black/10 p-6 flex flex-col justify-between"
              variants={cardHover}
              initial="rest"
              whileHover="hover"
            >
              <img
                src="/banner2.png"
                alt="3ª edição"
                className="rounded-lg w-full h-48 object-cover mb-4 opacity-70"
              />
              <div>
                <div className="flex justify-between items-center">
                  <h3 className="font-orbitron text-xl">3ª Edição</h3>
                  <span className="text-sm text-amber-600 font-semibold">Brevemente</span>
                </div>

                <p className="mt-3 text-black/80">
                  Próximo Torneio: <strong>20 Dezembro 2025</strong>
                </p>

                <p className="mt-1 text-black/70">Local: A anunciar</p>
              </div>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/bilhetes"
                  className="px-4 py-2 rounded-lg bg-yellow-300 text-black font-semibold hover:brightness-105 transition flex items-center gap-2 justify-center"
                >
                  Comprar Bilhetes <PiArrowRightLight />
                </Link>
                <Link to="/contato" className="px-4 py-2 rounded-lg border hover:bg-black/5 text-center">
                  Mais Info
                </Link>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-white2 relative overflow-hidden">
  <div className="absolute -top-20 -left-10 w-[400px] h-[400px] rounded-full bg-blue-300 opacity-10 blur-3xl animate-slow-spin" />
  <div className="absolute -bottom-20 -right-10 w-[300px] h-[300px] rounded-full bg-yellow-300 opacity-10 blur-3xl animate-slow-spin" />

  <div className="max-w-[1200px] mx-auto px-6">
    <h3 className="text-3xl md:text-4xl font-orbitron text-royal-blue text-center mb-12 relative inline-block">
      Parceiros
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-yellow-300 rounded-full mt-2"></span>
    </h3>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 place-items-center">
      {[1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.1, rotate: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="p-6 rounded-2xl border bg-white shadow-md flex items-center justify-center hover:shadow-2xl transition-transform duration-300"
        >
          <img
            src={`/parceiros/logo${i}.png`}
            alt={`Parceiro ${i}`}
            className="h-16 md:h-20 object-contain"
          />
        </motion.div>
      ))}
    </div>
  </div>

  <style jsx>{`
    @keyframes slowSpin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    .animate-slow-spin {
      animation: slowSpin 60s linear infinite;
    }
  `}</style>
</section>

<section className="py-20 bg-white2">
  <div className="max-w-[1200px] mx-auto px-6">
    <h2 className="text-4xl md:text-5xl font-orbitron text-royal-blue text-center mb-12 relative inline-block">
      Perguntas Frequentes
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-yellow-300 rounded-full mt-2"></span>
    </h2>

    <div className="space-y-4 max-w-3xl mx-auto">
      {[
        {
          question: "Como posso participar nos torneios 1x1?",
          answer: "Para participar, basta inscrever-se através do formulário oficial no nosso site ou contactar os organizadores nas redes sociais. As vagas são limitadas e a seleção será feita por ordem de inscrição."
        },
        {
          question: "Como compro bilhetes para os eventos?",
          answer: "Os bilhetes podem ser adquiridos online na secção 'Bilhetes' do nosso site ou nos pontos de venda oficiais (se aplicavel)."
        },
        {
          question: "Quais são as regras oficiais?",
          answer: "Todos os eventos seguem rigorosamente os regulamentos da Bola Ao Cesto, garantindo conformidade técnica e competitiva para jogadores e equipas."
        },
        {
          question: "Onde posso assistir aos jogos ao vivo?",
          answer: "Os jogos são transmitidos em várias plataformas digitais e também presencialmente nos ginásios designados para cada evento. Detalhes de transmissões e locais são divulgados no site e redes sociais."
        },
        {
          question: "Existe algum programa para patrocinadores e parceiros?",
          answer: "Sim! Criamos oportunidades para marcas que desejam associar-se aos nossos eventos, incluindo branding nos eventos, transmissões e conteúdos digitais."
        }
      ].map((item, idx) => (
        <details
          key={idx}
          className="group border rounded-lg p-4 bg-white shadow-sm cursor-pointer transition-all hover:shadow-md"
        >
          <summary className="flex justify-between items-center text-lg md:text-xl font-medium text-royal-blue">
            {item.question}
            <span className="ml-2 transition-transform duration-300 group-open:rotate-45">+</span>
          </summary>
          <p className="mt-3 text-black/80 leading-relaxed">{item.answer}</p>
        </details>
      ))}
    </div>
  </div>
</section>

    </>
  );
};

export default Homepage;
