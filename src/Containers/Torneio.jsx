import React, { useState, useEffect } from "react";
import { FaCrown, FaCalendarAlt, FaTicketAlt } from "react-icons/fa";
import { motion } from "framer-motion";

// ===========================================================
// TOP 10 HALL OF FAME (ALWAYS FIXED)
// ===========================================================

const topTenPlayers = [
  { name: "Octávio Chuma", img: "/hof/jjj.jpg", color: "from-sky-500 to-blue-700" },
  { name: "Marcus Sara", img: "/hof/jjj.jpg", color: "from-green-500 to-emerald-700" },
  { name: "Elsídio Tique", img: "/hof/jjj.jpg", color: "from-yellow-500 to-amber-700" },
  { name: "Cândido Adelina", img: "/hof/jjj.jpg", color: "from-red-500 to-rose-700" },
  { name: "Helton Beny 👑", img: "/hof/jjj.jpg", color: "from-sky-500 to-blue-700" },
  { name: "Eze Manave", img: "/hof/jjj.jpg", color: "from-green-500 to-emerald-700" },
  { name: "Mouzinho Lourenço", img: "/hof/jjj.jpg", color: "from-yellow-500 to-amber-700" },
  { name: "Dingane Jamela", img: "/hof/jjj.jpg", color: "from-red-500 to-rose-700" },
  { name: "Miguel Rafael", img: "/hof/jjj.jpg", color: "from-green-500 to-emerald-700" },
  { name: "João José Jr 👑", img: "/hof/jjj.jpg", color: "from-yellow-500 to-amber-700" },
];

// ===========================================================
// PLACEHOLDER PLAYERS FOR BRACKET
// ===========================================================

const samplePlayers = Array.from({ length: 24 }).map((_, i) => ({
  name: `Jogador ${i + 1}`,
  img: `/editions/generic/player${i + 1}.png`,
}));

// ===========================================================
// EDITIONS (each edition has winner + finalists + bracket)
// ===========================================================

const editions = {
  first: {
    year: "8 de Junho 2025",
    description:
      "A primeira edição marcou o início da Bola ao Cesto. 24 atletas batalharam em jogos emocionantes até restarem apenas dois finalistas numa final épica.",
    winner: {
      name: "João José Júnior",
      img: "/torneio/1sted/72.jpg",
      quote: "“Trabalhei para este momento. Sou campeão — por todos nós!”",
    },
    players: samplePlayers,
    finalists: [
      { name: "João José Júnior", img: "/editions/first/winner.png" },
      { name: "Miguel Rafael", img: "/editions/first/finalist2.png" },
    ],
    dates: [
      { label: "Final", date: "2025-06-08" },
    ],
    pictures: [
      "/torneio/1sted/32.jpg",
      "/torneio/1sted/61.jpg",
      "/torneio/1sted/69.jpg",
      "/torneio/1sted/89.jpg",
    ],
  },

  second: {
    year: "31 de Agosto 2025",
    description:
      "A segunda edição vem com talentos renovados, rivalidades intensas e jogos imprevisíveis. Quem ficará na história?",
    winner: {
      name: "Helton Beny",
      img: "/torneio/2nded/1.png",
      quote: "“Cada partida foi uma batalha. O esforço valeu a pena!”",
    },
    players: samplePlayers,
    finalists: [
      { name: "Eze Manave", img: "/editions/second/finalist1.png" },
      { name: "Dingane Jamela", img: "/editions/second/finalist2.png" },
    ],
    dates: [
      { label: "Final", date: "2025-08-31" },
    ],
    pictures: [
      "/torneio/2nded/2.jpg",
      "/torneio/2nded/3.jpg",
      "/torneio/2nded/4.jpg",
      "/torneio/2nded/5.jpg",
    ],
  },

  third: {
    year: "20 de Dezembro 2025",
    description:
      "A terceira edição chega mais competitiva do que nunca. Cada lance pode mudar a história do torneio.",
    winner: null,
    players: samplePlayers,
    finalists: [
      { name: "Mouzinho Lourenço", img: "/editions/third/finalist1.png" },
      { name: "Marcus Sara", img: "/editions/third/finalist2.png" },
    ],
    dates: [{ label: "Torneio", date: "2025-12-20" }],
  },
};

// ===========================================================
// MAIN COMPONENT
// ===========================================================

const Torneio = () => {
  const [edition, setEdition] = useState("second");
  const [countdown, setCountdown] = useState("");

  // COUNTDOWN FOR SECOND EDITION
  useEffect(() => {
    document.title = "Bola Ao Cesto - Torneio";

    if (edition === "second") {
      const interval = setInterval(() => {
        const targetDate = new Date("2025-08-31T10:00:00");
        const now = new Date();
        const diff = targetDate - now;

        if (diff <= 0) {
          setCountdown("O torneio começou!");
          clearInterval(interval);
          return;
        }

        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const m = Math.floor((diff / (1000 * 60)) % 60);
        const s = Math.floor((diff / 1000) % 60);

        setCountdown(`${d}d ${h}h ${m}m ${s}s`);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [edition]);

  const data = editions[edition];
  const today = new Date();

  // Animation
  const cardVariants = {
    hidden: { opacity: 0, x: 80 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  };

  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen">

      {/* HERO */}
      <div
        className="relative w-full h-[60vh] bg-cover bg-center flex flex-col items-center justify-center text-center"
        style={{ backgroundImage: "url('/banner3.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold font-orbitron">
            Torneio Bola ao Cesto
          </h1>
          <p className="mt-4 text-xl opacity-90">Onde lendas nascem 🏀🔥</p>

          {edition === "second" && (
            <>
              <div className="mt-6 bg-yellow-400 text-white px-6 py-3 rounded-full font-bold text-xl shadow-lg animate-pulse inline-block">
                {countdown}
              </div>

              <a
                href="/bilhetes"
                className="mt-6 inline-flex items-center gap-3 bg-royal-blue hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-full shadow-xl text-lg"
              >
                <FaTicketAlt /> Comprar Bilhetes
              </a>
            </>
          )}
        </div>
      </div>

      {/* MAIN */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* TOP 10 */}
        <h2 className="text-4xl font-orbitron text-center text-royal-blue mb-12">
          BAC Top 10 Hall of Fame
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {topTenPlayers.map((p, i) => (
            <motion.div
              key={p.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className={`rounded-xl shadow-lg overflow-hidden bg-gradient-to-b ${p.color}`}
            >
              <img src={p.img} className="w-full h-56 object-cover mix-blend-luminosity" />
              <div className="p-3 bg-black/60 text-white font-semibold text-center">
                {p.name}
              </div>
            </motion.div>
          ))}
        </div>

        {/* EDITION TOGGLE */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-white rounded-full shadow p-1">
            {[
              { key: "first", label: "1ª Edição" },
              { key: "second", label: "2ª Edição" },
              { key: "third", label: "3ª Edição" },
            ].map((ed) => (
              <button
                key={ed.key}
                onClick={() => setEdition(ed.key)}
                className={`px-5 py-2 rounded-full transition ${
                  edition === ed.key
                    ? "bg-royal-blue text-white shadow-lg"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
              >
                {ed.label}
              </button>
            ))}
          </div>
        </div>

        {/* EDITION SUMMARY */}
        <section className="mb-16 text-center">
          <div className="inline-block bg-gradient-to-r from-royal-blue to-indigo-600 text-white px-6 py-2 rounded-full font-bold shadow-lg mb-4">
            {data.year}
          </div>

          <p className="max-w-2xl mx-auto text-gray-700">{data.description}</p>

          {/* Winner */}
          {data.winner && (
            <div className="mt-10 flex flex-col items-center">
              <img
                src={data.winner.img}
                className="w-40 h-40 object-cover rounded-full shadow-xl border-4 border-yellow-400"
              />
              <p className="mt-4 text-2xl font-bold text-royal-blue flex items-center gap-2">
                <FaCrown className="text-yellow-400 text-3xl" />
                Campeão: {data.winner.name}
              </p>
              <p className="italic text-gray-500 mt-2">{data.winner.quote}</p>
            </div>
          )}

          {/* View Moments Button */}
          {(edition === "first" || edition === "second") && (
            <a
              href={`/momentos`}
              className="mt-6 inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-full shadow-lg text-lg"
            >
              Ver Momentos
            </a>
          )}

          {/* Edition Pictures */}
          {data.pictures && (
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
              {data.pictures.map((pic, idx) => (
                <img
                  key={idx}
                  src={pic}
                  className="w-full h-48 object-cover rounded-xl shadow-lg"
                />
              ))}
            </div>
          )}
        </section>

        {/* COMING SOON THIRD EDITION */}
        {edition === "third" && (
          <div className="text-center mb-16">
            <p className="text-2xl font-bold text-gray-700 mb-4">
              Próxima Edição: 20 de Dezembro
            </p>
            <a
              href="/bilhetes"
              className="inline-flex items-center gap-3 bg-royal-blue hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-full shadow-xl text-lg"
            >
              <FaTicketAlt /> Comprar Bilhetes
            </a>
          </div>
        )}

        {/* BRACKET TITLE */}
        <h2 className="text-3xl font-orbitron text-center text-royal-blue mb-6">
          Tabela Eliminatória (24 Jogadores)
        </h2>

        {/* BRACKET (RESPONSIVE) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20">
          {/* LEFT SIDE */}
          {/* FINALISTS MIDDLE */}
          <div className="flex flex-col items-center space-y-6"></div>
          {/* RIGHT SIDE */}
        </div>

        {/* DATES */}
        <aside className="max-w-md mx-auto">
          <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <FaCalendarAlt className="text-royal-blue" /> Datas Importantes
          </h3>
          <div className="relative border-l-2 border-royal-blue pl-6 space-y-6">
            {data.dates.map((d, idx) => {
              const isPast = new Date(d.date) < today;

              return (
                <div key={idx} className="relative">
                  <span
                    className={`absolute -left-3 top-1 w-5 h-5 rounded-full ${
                      isPast ? "bg-gray-400" : "bg-royal-blue animate-pulse"
                    }`}
                  ></span>
                  <p className={`${isPast ? "text-gray-500 line-through" : "text-gray-800"}`}>
                    {d.label} –{" "}
                    {new Date(d.date).toLocaleDateString("pt-PT", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
              );
            })}
          </div>
        </aside>

      </div>
    </div>
  );
};

export default Torneio;
