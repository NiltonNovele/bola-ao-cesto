import React, { useState, useEffect } from "react";
import { pdata } from "../Constants/data";
import { FaArrowUp, FaArrowDown, FaMinus, FaStar } from "react-icons/fa";
import { MapPin, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

const Teams = () => {
  useEffect(() => {
    document.title = "A Nossa Equipa - BAC";
  }, []);

  const [flipped, setFlipped] = useState({});

  const toggleFlip = (idx) => {
    setFlipped((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const headCoaches = pdata?.HeadCoaches || [];
  const partners = pdata?.Partners || [];

  return (
    <div className="bg-gray-50">
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

      <section className="max-w-[1400px] mx-auto px-5 md:px-20 py-20">
        <h2 className="text-3xl md:text-4xl font-orbitron text-royal-blue text-center mb-14">
          Organização
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {headCoaches.map((coach, idx) => (
            <div
              key={idx}
              className="relative w-full h-[350px] cursor-pointer perspective-1000"
              onClick={() => toggleFlip(idx)}
            >
              <div
                className={`relative w-full h-full transition-transform duration-700`}
                style={{
                  transformStyle: "preserve-3d",
                  transform: flipped[idx] ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
              >
                <div
                  className="absolute w-full h-full bg-white/70 backdrop-blur-xl rounded-3xl shadow-lg flex flex-col items-center justify-center p-6 hover:shadow-2xl hover:-translate-y-1 transition-transform duration-500"
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
                  <p className="mt-4 text-xs italic text-gray-500">
                    (toque para ver mais)
                  </p>
                </div>

                <div
                  className="absolute w-full h-full bg-gradient-to-br from-royal-blue/80 to-emerald-500/70 text-white rounded-3xl shadow-lg flex flex-col items-center justify-center p-6"
                  style={{
                    transform: "rotateY(180deg)",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <h3 className="text-lg md:text-xl font-bold mb-3">
                    Sobre {coach.name?.split(" ")[0]}
                  </h3>
                  <p className="text-center text-sm md:text-base leading-relaxed">
                    {coach.description ||
                      "'A única coisa que tenho a dizer é: Bola para a frente'"}
                  </p>
                </div>
              </div>
            </div>
          ))}
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

      <section className="max-w-[1400px] mx-auto px-5 md:px-20 py-20 grid grid-cols-1 md:grid-cols-2 gap-16 bg-white rounded-3xl shadow-lg">
        <div>
          <h2 className="text-3xl md:text-4xl font-orbitron text-royal-blue mb-8">
            Entre em Contacto
          </h2>
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Nome"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-royal-blue"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-royal-blue"
            />
            <input
              type="text"
              placeholder="Assunto"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-royal-blue"
            />
            <textarea
              placeholder="Mensagem"
              rows="5"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-royal-blue"
            ></textarea>
            <button
              type="submit"
              className="bg-royal-blue hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-orbitron text-royal-blue mb-8">
            Informações de Contato
          </h2>
          <div className="flex items-start gap-4">
            <MapPin className="text-royal-blue w-6 h-6 mt-1" />
            <p className="text-gray-700">Av. de Magiguana, Maputo, Mozambique</p>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="text-royal-blue w-6 h-6" />
            <p className="text-gray-700">+258 12 345 6789</p>
          </div>
          <div className="flex items-center gap-4">
            <Mail className="text-royal-blue w-6 h-6" />
            <p className="text-gray-700">contacto@bolaocesto.com</p>
          </div>
          <div className="flex items-start gap-4">
            <FaStar className="text-yellow-400 w-5 h-5 mt-1" />
            <p className="text-gray-700">Horário: Seg-Sex 9:00 - 18:00</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Teams;
