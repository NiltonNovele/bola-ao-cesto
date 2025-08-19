import React, { useState, useEffect } from "react";
import { pdata } from "../Constants/data";
import { FaArrowUp, FaArrowDown, FaMinus, FaStar } from "react-icons/fa";

const Teams = () => {
  useEffect(() => {
    document.title = "A Nossa Equipa - BAC";
  }, []);

  const [flipped, setFlipped] = useState({});

  const toggleFlip = (idx) => {
    setFlipped((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative w-full h-[65vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/banner.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30"></div>
        <div className="relative text-center px-6">
          <h1 className="text-white text-4xl md:text-6xl font-orbitron font-bold drop-shadow-lg animate-fadeIn">
            Conheça a Nossa Equipa
          </h1>
          <p className="mt-4 text-gray-200 text-lg md:text-xl max-w-2xl mx-auto animate-fadeIn delay-200">
            Os fundadores, treinadores e atletas que marcaram a história do
            projeto Bola Ao Cesto.
          </p>
        </div>
      </div>

      {/* Head Coaches */}
      <section className="max-w-[1400px] mx-auto px-5 md:px-20 py-20">
        <h2 className="text-3xl md:text-4xl font-orbitron text-royal-blue text-center mb-14">
          Organização
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {pdata.HeadCoaches.map((coach, idx) => (
            <div
              key={idx}
              className="relative w-full h-[350px] cursor-pointer"
              style={{ perspective: "1000px" }}
              onClick={() => toggleFlip(idx)}
            >
              {/* Flip Container */}
              <div
                className={`relative w-full h-full transition-transform duration-700`}
                style={{
                  transformStyle: "preserve-3d",
                  transform: flipped[idx] ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
              >
                {/* Front */}
                <div
                  className="absolute w-full h-full bg-white/70 backdrop-blur-xl rounded-3xl shadow-lg flex flex-col items-center justify-center p-6"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-royal-blue/40 shadow-md mb-4">
                    <img
                      src={coach.picture}
                      alt={coach.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
                    {coach.name}
                  </h3>
                  <span className="inline-block bg-royal-blue/10 text-royal-blue font-medium px-3 py-1 rounded-full mt-2 text-sm md:text-base">
                    {coach.title}
                  </span>

                  {/* Hint */}
                  <p className="mt-4 text-xs italic text-gray-500">
                    (toque para ver mais)
                  </p>
                </div>

                {/* Back */}
                <div
                  className="absolute w-full h-full bg-gradient-to-br from-royal-blue/80 to-emerald-500/70 text-white rounded-3xl shadow-lg flex flex-col items-center justify-center p-6"
                  style={{
                    transform: "rotateY(180deg)",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <h3 className="text-lg md:text-xl font-bold mb-3">
                    Sobre {coach.name.split(" ")[0]}
                  </h3>
                  <p className="text-center text-sm md:text-base leading-relaxed">
                    {coach.description ||
                      "Descrição breve sobre este fundador/treinador principal, destacando o seu papel e contribuições para a organização."}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hall of Fame */}
      {/* <section className="max-w-[1400px] mx-auto px-5 md:px-20 py-20 bg-gradient-to-b from-gray-100 to-gray-200 rounded-t-3xl">
        <h2 className="text-3xl md:text-4xl font-orbitron text-royal-blue text-center mb-14">
          Quadro de Honra
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-10">
          {pdata.HallOfFame.slice(0, 10).map((player, idx) => (
            <div
              key={idx}
              className="relative bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition duration-500 overflow-hidden flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={player.picture}
                  alt={player.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition"
                />
                {player.winner && (
                  <span className="absolute top-3 right-3 bg-yellow-400 text-white text-xs md:text-sm font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                    <FaStar /> Vencedor
                  </span>
                )}
              </div>

              <div className="p-5 text-center flex flex-col flex-grow">
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-800">
                  {player.name}
                </h3>
                <p className="text-gray-500 text-sm md:text-base mb-4">
                  Idade: {player.age} • Altura: {player.height}
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="flex items-center gap-1 bg-green-100 text-green-700 text-xs md:text-sm font-medium px-2.5 py-1 rounded-full">
                    <FaArrowUp /> {player.wins} Vitórias
                  </span>
                  <span className="flex items-center gap-1 bg-yellow-100 text-yellow-700 text-xs md:text-sm font-medium px-2.5 py-1 rounded-full">
                    <FaMinus /> {player.draws} Empates
                  </span>
                  <span className="flex items-center gap-1 bg-red-100 text-red-600 text-xs md:text-sm font-medium px-2.5 py-1 rounded-full">
                    <FaArrowDown /> {player.losses} Derrotas
                  </span>
                </div>
                <p className="mt-4 text-gray-600 text-sm">
                  Jogos Jogados:{" "}
                  <span className="font-semibold">{player.games}</span>
                </p>
                <p className="mt-2 text-gray-700 text-sm">
                  Participação em:{" "}
                  <span className="font-medium">
                    {player.editions.join(", ")}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section> */}
    </div>
  );
};

export default Teams;
