import React, { useState } from "react";
import { Instagram, Facebook, Youtube, Music2 } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateSub = () => {
    let fail = !email || !validateEmail(email);
    setEmailError(fail ? "Insira um email válido!" : "");
    return !fail;
  };

  const handleSubscription = (e) => {
    e.preventDefault();
    if (!validateSub()) return;
    console.log("subscribed");
  };

  return (
    <footer className="relative w-full text-white overflow-hidden">

      <div
        className="absolute inset-0 bg-cover bg-center brightness-[0.45] scale-105"
        style={{ backgroundImage: "url('/footer.jpg')" }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-5 py-14 md:py-24 flex flex-col md:flex-row justify-between gap-14">

        <div className="w-full md:w-1/3 flex flex-col gap-7 bg-white/10 backdrop-blur-xl rounded-2xl p-6 md:p-8 shadow-lg border border-white/10">
          
          <div className="flex items-center gap-4">
            <img src="/bac.png" alt="Logo" className="h-12 md:h-16 drop-shadow-lg" />
            <h1 className="font-orbitron text-4xl md:text-5xl font-bold tracking-wide">
              Bola Ao Cesto
            </h1>
          </div>

          <p className="text-white/90 leading-relaxed text-base md:text-lg">
            Inscreva-se na nossa newsletter para estares atualizado a todas as notícias.
          </p>

          <form onSubmit={handleSubscription} className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <input
                type="email"
                placeholder="Digite o seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`px-5 py-3 rounded-lg outline-none bg-white/20 border text-white placeholder-white transition-all
                  ${emailError ? "border-red-400" : "border-white/40 focus:border-yellow-300"}`}
              />
              {emailError && <p className="text-red-300 text-xs">{emailError}</p>}
            </div>

            <button
              type="submit"
              className="bg-gradient-to-br from-blue-400 to-yellow-300 hover:from-yellow-300 hover:to-blue-400 font-orbitron rounded-lg text-sm px-6 py-3 text-black font-semibold transition shadow-md hover:scale-[1.03]">
              Subscrever
            </button>
          </form>

          <div className="flex items-center gap-5 pt-3">
            <a
              href="https://www.instagram.com/bac_1v1"
              className="p-2 bg-white/10 rounded-xl hover:bg-white/20 transition flex items-center justify-center hover:scale-110"
            >
              <Instagram size={26} />
            </a>
            <a
              href="https://www.youtube.com/live/AlrH-oZDTAI?si=hjCSMqHfYW0hPL96"
              className="p-2 bg-white/10 rounded-xl hover:bg-white/20 transition flex items-center justify-center hover:scale-110"
            >
              <Youtube size={26} />
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/4 flex flex-col gap-5">
          <h2 className="text-2xl font-orbitron mb-2 tracking-wide">Links Rápidos</h2>
          {["Momentos", "Equipe", "Novidades", "Sobre"].map((link, i) => (
            <p
              key={i}
              className="cursor-pointer hover:text-yellow-300 hover:translate-x-1 transition-all"
            >
              {link}
            </p>
          ))}
        </div>

        <div className="w-full md:w-1/4 flex flex-col gap-5">
          <h2 className="text-2xl font-orbitron mb-2 tracking-wide">Contacto</h2>
          <p className="hover:text-yellow-300 transition">+258 84 123 4567</p>
          <p className="hover:text-yellow-300 transition">
            info@bolaocesto.com
          </p>
          <p className="hover:text-yellow-300 transition">
            Av. de Magiguana, Maputo, Mozambique
          </p>
        </div>
      </div>

      <div className="relative w-full bg-black/70 py-5 text-center text-sm backdrop-blur-md border-t border-white/10">
        <p className="tracking-wide">© 2025 Bola Ao Cesto. Todos os direitos reservados.</p>
        <p className="mt-1">
          Desenvolvido pela{" "}
          <a
            href="https://synctechx.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-yellow-300 transition"
          >
            SyncTechX
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
