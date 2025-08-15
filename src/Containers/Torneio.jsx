import React, { useState, useEffect } from "react";
import { FaCrown, FaCalendarAlt } from "react-icons/fa";

const editions = {
  first: {
    year: "2023",
    description:
      "A primeira edição marcou o início da Bola ao Cesto, reunindo 18 atletas numa competição histórica. Jogos intensos, surpresas nas eliminatórias e uma final memorável coroaram o primeiro campeão.",
    winner: "João Silva",
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
    year: "2024",
    description:
      "A segunda edição trouxe ainda mais competitividade, com novos jogadores e partidas épicas. O torneio elevou a fasquia e consolidou a Bola ao Cesto como o evento mais aguardado do ano.",
    winner: "Paulo Rocha",
    roadToFinal: {
      quarterFinals: [
        ["Paulo Rocha", "José Martins"],
        ["Ricardo Moreira", "Bruno Lopes"],
        ["Luis Fonseca", "Nuno Gomes"],
        ["Tiago Almeida", "Manuel Figueiredo"],
      ],
      semiFinals: [
        ["Paulo Rocha", "Ricardo Moreira"],
        ["Luis Fonseca", "Tiago Almeida"],
      ],
      final: ["Paulo Rocha", "Luis Fonseca"],
      champion: "Paulo Rocha",
    },
    dates: [
      { label: "Início da competição", date: "2024-05-05" },
      { label: "Meias-Finais", date: "2024-06-20" },
      { label: "Final", date: "2024-07-02" },
    ],
  },
};

const Torneio = () => {
  const [edition, setEdition] = useState("first");

  useEffect(() => {
    document.title = "Bola Ao Cesto - Torneio";
  }, []);

  const data = editions[edition];
  const today = new Date();

  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen">
      {/* Hero */}
      <div
        className="relative w-full h-[55vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/banner.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
        <div className="relative text-center text-white animate-fadeIn">
          <h1 className="text-6xl font-extrabold font-orbitron drop-shadow-lg">
            Torneio Bola ao Cesto
          </h1>
          <p className="mt-4 text-xl italic opacity-90">
            Onde lendas nascem 🏀🔥
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 px-6 py-16">
        {/* Main Content */}
        <div className="flex-1">
          {/* Rules */}
          <section className="mb-16">
            <h2 className="text-3xl font-orbitron text-center text-royal-blue mb-8">
              Como Funciona o Torneio
            </h2>
            <div className="bg-white shadow-lg rounded-2xl p-8 border border-royal-blue/30 hover:shadow-2xl transition">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                O <strong>Torneio Bola ao Cesto</strong> é jogado em formato
                eliminatório, inspirado nos grandes campeonatos internacionais.
              </p>
              <ul className="list-disc list-inside space-y-3 text-gray-700">
                <li>
                  <span className="font-semibold">18 jogadores</span> participam
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
            <p className="mt-4 text-lg font-semibold text-royal-blue flex justify-center items-center gap-2">
              <FaCrown className="text-yellow-400" /> Campeão: {data.winner}
            </p>
          </section>

          {/* Bracket */}
          <section>
            <h3 className="text-2xl font-orbitron text-royal-blue text-center mb-10">
              Caminho até à Final
            </h3>
            <div className="flex justify-center overflow-x-auto">
              <div className="grid grid-cols-3 gap-12">
                {/* Quarter Finals */}
                <div className="space-y-6">
                  <h4 className="font-bold text-center text-gray-600">
                    Quartos
                  </h4>
                  {data.roadToFinal.quarterFinals.map((match, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-4 rounded-lg shadow text-center hover:scale-105 transition"
                    >
                      <p>{match[0]}</p>
                      <span className="font-bold text-royal-blue">vs</span>
                      <p>{match[1]}</p>
                    </div>
                  ))}
                </div>

                {/* Semi Finals */}
                <div className="space-y-12 flex flex-col justify-center">
                  <h4 className="font-bold text-center text-gray-600">
                    Meias-Finais
                  </h4>
                  {data.roadToFinal.semiFinals.map((match, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-4 rounded-lg shadow text-center hover:scale-105 transition"
                    >
                      <p>{match[0]}</p>
                      <span className="font-bold text-royal-blue">vs</span>
                      <p>{match[1]}</p>
                    </div>
                  ))}
                </div>

                {/* Final */}
                <div className="flex flex-col items-center justify-center">
                  <h4 className="font-bold text-center text-gray-600 mb-4">
                    Final
                  </h4>
                  <div className="bg-gradient-to-b from-white to-gray-50 p-6 rounded-lg shadow-xl text-center border-2 border-yellow-400 hover:scale-105 transition">
                    <p>{data.roadToFinal.final[0]}</p>
                    <span className="font-bold text-royal-blue">vs</span>
                    <p>{data.roadToFinal.final[1]}</p>
                    <FaCrown className="text-yellow-500 text-3xl mt-3 mx-auto" />
                    <p className="mt-2 font-bold text-royal-blue">
                      Campeão: {data.roadToFinal.champion}
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
