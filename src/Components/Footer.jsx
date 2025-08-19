import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSubscription = (e) => {
    e.preventDefault();
    if (!validateSub()) return;
    console.log("subscribed");
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateSub = () => {
    let failEmail = !email || !validateEmail(email);
    setEmailError(failEmail ? "Email is required!" : "");
    return !failEmail;
  };

  return (
    <div className="relative w-full h-auto overflow-hidden text-white">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-sm brightness-75 z-0"
        style={{ backgroundImage: "url('/footer.jpg')" }}
      ></div>

      {/* Content */}
      <div className="relative z-10 container max-w-[1440px] px-5 py-12 md:py-24 flex flex-col md:flex-row justify-between items-start gap-10 mx-auto">
        {/* Left Section */}
        <div className="flex flex-col gap-6 w-full md:w-1/3">
          <div className="flex items-center gap-4">
            <img src="/bac.png" alt="On Court Logo" className="h-12 md:h-16" />
            <h1 className="text-5xl md:text-5xl font-orbitron font-bold">
              Bola Ao Cesto
            </h1>
          </div>
          <p className="text-white/90">
            Inscreva-se na nossa newsletter para estares atualizado a todas as
            noticias
          </p>
          <form
            onSubmit={handleSubscription}
            className="flex flex-col sm:flex-row gap-3"
          >
            <div className="flex flex-col gap-1 w-full sm:w-auto">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  borderColor: emailError
                    ? "rgba(255,0,0,0.75)"
                    : "rgba(255,255,255,0.3)",
                }}
                className="px-5 py-2 rounded-lg outline-none bg-white/20 text-white border placeholder-white"
              />
              {emailError && (
                <p className="text-red-400 text-xs">{emailError}</p>
              )}
            </div>
            <button
              type="submit"
              className="bg-gradient-to-br from-blue-400 to-yellow-300 hover:from-yellow-300 hover:to-blue-400 font-medium rounded-lg text-sm px-5 py-2 text-white"
            >
              Subscrever
            </button>
          </form>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col gap-3 w-full md:w-1/4">
          <h2 className="text-2xl font-orbitron mb-2">Links Rapidos</h2>
          <p>Momentos</p>
          <p>Equipe</p>
          <p>Novidades</p>
          <p>Sobre</p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-3 w-full md:w-1/4">
          <h2 className="text-2xl font-orbitron mb-2">Contacto</h2>
          <p>+258 84 123 4567</p>
          <p>info@bolaocesto.co.mz</p>
          <p>Av. Amilcar Cabral, Maputo, Mozambique</p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="relative z-10 w-full bg-black/80 py-4 text-center text-white text-sm mt-5">
        <p>© 2025 Bola Ao Cesto. Todos os direitos reservados.</p>
        <p>
          Desenvolvido pela{" "}
          <a
            href="https://synctechx.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-yellow-300"
          >
            SyncTechX
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
