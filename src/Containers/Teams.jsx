import React from "react";
import { pdata } from "../Constants/data";
import { FaArrowUp, FaArrowDown, FaMinus, FaStar } from "react-icons/fa";

const Teams = () => {
  React.useEffect(() => {
    document.title = "A Nossa Equipa | On Court";
  }, []);

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div
        className="w-full h-[60vh] bg-cover bg-center relative flex items-center justify-center"
        style={{ backgroundImage: "url('/banner.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent animate-fadeIn"></div>
        <h1 className="relative text-white text-4xl md:text-6xl font-orbitron z-10 drop-shadow-lg">
          Conheça a Equipa
        </h1>
      </div>

      {/* Head Coaches */}
      <section className="max-w-[1400px] mx-auto px-5 md:px-20 py-20">
        <h2 className="text-3xl md:text-4xl font-orbitron text-royal-blue text-center mb-16">
          Fundadores e Treinadores Principais
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {pdata.HeadCoaches.map((coach, idx) => (
            <div
              key={idx}
              className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition duration-500 min-h-[450px]"
            >
              <img
                src={coach.picture}
                alt={coach.name}
                className="w-full h-80 md:h-96 object-cover rounded-t-2xl"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl md:text-2xl font-semibold mb-2">
                  {coach.name}
                </h3>
                <p className="text-gray-600 text-md md:text-lg">
                  {coach.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hall of Fame */}
      <section className="max-w-[1400px] mx-auto px-5 md:px-20 py-20 bg-gray-50 rounded-t-3xl">
        <h2 className="text-3xl md:text-4xl font-orbitron text-royal-blue text-center mb-16">
          Quadro de Honra
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {pdata.HallOfFame.slice(0, 10).map((player, idx) => (
            <div
              key={idx}
              className="bg-white/80 backdrop-blur-md rounded-2xl shadow-md hover:shadow-2xl hover:scale-105 transition duration-500 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={player.picture}
                  alt={player.name}
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
                {player.winner && (
                  <span className="absolute top-3 right-3 bg-yellow-400 text-white text-xs md:text-sm font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                    <FaStar /> Vencedor
                  </span>
                )}
              </div>
              <div className="p-5 text-center">
                <h3 className="text-lg md:text-xl font-semibold mb-1">
                  {player.name}
                </h3>
                <p className="text-gray-500 text-sm md:text-md mb-2">
                  Idade: {player.age} | Altura: {player.height}
                </p>
                <div className="text-sm md:text-md space-y-1">
                  <p className="flex justify-center items-center gap-2">
                    Vitórias: <FaArrowUp className="text-green-500" />{" "}
                    {player.wins}
                  </p>
                  <p className="flex justify-center items-center gap-2">
                    Empates: <FaMinus className="text-yellow-400" />{" "}
                    {player.draws}
                  </p>
                  <p className="flex justify-center items-center gap-2">
                    Derrotas: <FaArrowDown className="text-red-500" />{" "}
                    {player.losses}
                  </p>
                  <p className="mt-2 text-gray-600">
                    Jogos Jogados: {player.games}
                  </p>
                  <p className="mt-1 font-medium">
                    Participação em Edições: {player.editions.join(", ")}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Teams;
