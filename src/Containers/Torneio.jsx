import React, { useState, useEffect } from "react";
import { FaCrown, FaCalendarAlt, FaTicketAlt } from "react-icons/fa";

const editions = {
  first: {
    year: "2025",
    description:
      "A primeira edição marcou o início da Bola ao Cesto, reunindo 24 atletas numa competição histórica. Jogos intensos, surpresas nas eliminatórias e uma final memorável coroaram o primeiro campeão.",
    winner: "João José Júnior",
    roadToFinal: {
      quarterFinals: [
        ["João Silva", "Rui Ferreira"],
        ["Carlos Mendes", "Pedro Lima"],
        ["Miguel Santos", "Hugo Carvalho"],
        ["Paulo Rocha", "André Costa"],
      ],
      semiFinals: [
        ["João Silva", "Carlos Mendes"],
        ["Miguel Santos", "Paulo Rocha"],
      ],
      final: ["João Silva", "Miguel Santos"],
      champion: "João Silva",
    },
    dates: [
      { label: "Início da competição", date: "2023-05-01" },
      { label: "Meias-Finais", date: "2023-06-15" },
      { label: "Final", date: "2023-06-30" },
    ],
  },
  second: {
    year: "2025",
    description:
      "A segunda edição promete ser histórica! Novos talentos, partidas épicas e surpresas até a final. Prepare-se para a emoção da Bola ao Cesto.",
    winner: null,
    roadToFinal: {
      quarterFinals: [],
      semiFinals: [],
      final: [],
      champion: null,
    },
    dates: [{ label: "Torneio", date: "2025-08-31" }],
  },
};

const Torneio = () => {
  const [edition, setEdition] = useState("second");
  const [countdown, setCountdown] = useState("");

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

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [edition]);

  const data = editions[edition];
  const today = new Date();

  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen">
      {/* Hero */}
      <div
        className="relative w-full h-[65vh] bg-cover bg-center flex flex-col items-center justify-center text-center"
        style={{ backgroundImage: "url('/banner.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
        <div className="relative z-10 text-white animate-fadeIn px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold font-orbitron drop-shadow-lg">
            Torneio Bola ao Cesto
          </h1>
          <p className="mt-4 text-xl md:text-2xl italic opacity-90">
            Onde lendas nascem 🏀🔥
          </p>

          {edition === "second" && (
            <>
              {/* Countdown */}
              <div className="mt-6 bg-yellow-400 text-white px-6 py-3 rounded-full font-bold text-2xl md:text-3xl shadow-lg animate-pulse inline-block">
                {countdown}
              </div>

              {/* Botão Comprar Bilhetes */}
              <a
                href="/support-us"
                className="mt-6 inline-flex items-center gap-3 bg-royal-blue hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-full shadow-xl text-lg transition transform hover:scale-105"
              >
                <FaTicketAlt /> Comprar Bilhetes
              </a>
            </>
          )}
        </div>
      </div>

      {/* Main Section */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 px-6 py-16">
        <div className="flex-1">
          {/* Como Funciona */}
          <section className="mb-16">
            <h2 className="text-3xl font-orbitron text-center text-royal-blue mb-8">
              Como Funciona o Torneio
            </h2>
            <div className="bg-white shadow-xl rounded-2xl p-8 border border-royal-blue/30 hover:shadow-2xl transition">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                O <strong>Torneio Bola ao Cesto</strong> é jogado em formato
                eliminatório, inspirado nos grandes campeonatos internacionais.
              </p>
              <ul className="list-disc list-inside space-y-3 text-gray-700">
                <li>
                  <span className="font-semibold">24 jogadores</span> participam
                  em cada edição.
                </li>
                <li>
                  Jogos em{" "}
                  <span className="font-semibold">eliminatórias diretas</span>{" "}
                  até à final.
                </li>
                <li>
                  O <span className="font-semibold">campeão</span> é
                  imortalizado no quadro de honra.
                </li>
                <li>
                  Cada edição traz{" "}
                  <span className="font-semibold">
                    novas histórias e rivalidades
                  </span>
                  .
                </li>
              </ul>
            </div>
          </section>

          {/* Edition Toggle */}
          <div className="flex justify-center mb-12">
            <div className="flex bg-white rounded-full shadow p-1">
              <button
                onClick={() => setEdition("first")}
                className={`px-6 py-2 rounded-full transition ${
                  edition === "first"
                    ? "bg-royal-blue text-white shadow-lg"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                1ª Edição
              </button>
              <button
                onClick={() => setEdition("second")}
                className={`px-6 py-2 rounded-full transition ${
                  edition === "second"
                    ? "bg-royal-blue text-white shadow-lg"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                2ª Edição
              </button>
            </div>
          </div>

          {/* Edition Info */}
          <section className="mb-16 text-center">
            <div className="inline-block bg-gradient-to-r from-royal-blue to-indigo-600 text-white px-6 py-2 rounded-full font-bold shadow-lg mb-4">
              {data.year}
            </div>
            <p className="text-gray-700 mt-4 max-w-2xl mx-auto leading-relaxed">
              {data.description}
            </p>
            {data.winner && (
              <p className="mt-4 text-lg font-semibold text-royal-blue flex justify-center items-center gap-2">
                <FaCrown className="text-yellow-400" /> Campeão: {data.winner}
              </p>
            )}
          </section>
        </div>

        {/* Sidebar - Timeline */}
        <aside className="w-full lg:w-1/4">
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
                  <p
                    className={`${
                      isPast ? "text-gray-500 line-through" : "text-gray-800"
                    }`}
                  >
                    {d.label} -{" "}
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
