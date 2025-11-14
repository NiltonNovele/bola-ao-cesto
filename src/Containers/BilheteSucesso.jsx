import React, { useState, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";

const BilheteSucesso = () => {
  const [method, setMethod] = useState("whatsapp");
  const [email, setEmail] = useState("");
  const [file, setFile] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const [countryCode, setCountryCode] = useState("+258");
  const [whatsapp, setWhatsapp] = useState("");

  useEffect(() => {
    document.title = "Sucesso | BAC";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (method === "email" && !email) {
      alert("Por favor, insira o seu email!");
      return;
    }
    if (method === "whatsapp" && !whatsapp) {
      alert("Por favor, insira o seu número de WhatsApp!");
      return;
    }
    if (!file) {
      alert("Por favor, carregue o comprovativo de pagamento!");
      return;
    }
    setSubmitted(true);
  };

  return (
    <div
      className="pt-[100px] flex justify-center items-center min-h-screen bg-cover bg-center px-4"
      style={{ backgroundImage: "url('/suc.jpg')" }}
    >
      <div className="flex flex-col lg:flex-row gap-10 w-full max-w-6xl">
        <div className="flex-1 bg-white/60 backdrop-blur-lg rounded-3xl shadow-xl p-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-blue-900 mb-6 text-center lg:text-left">
            Como funciona?
          </h2>
          <ol className="space-y-5 text-gray-800 text-base md:text-lg leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-600 text-white font-bold rounded-full">
                1
              </span>
              Faça o pagamento para a conta fornecida no anúncio oficial.
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-600 text-white font-bold rounded-full">
                2
              </span>
              Carregue aqui o comprovativo de pagamento.
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-600 text-white font-bold rounded-full">
                3
              </span>
              Escolha se deseja receber o bilhete via Email ou WhatsApp.
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-600 text-white font-bold rounded-full">
                4
              </span>
              Após a validação, receberá o bilhete no método selecionado.
            </li>
          </ol>
        </div>

        <div className="flex-1 bg-white/70 backdrop-blur-md rounded-3xl shadow-xl p-8 md:p-10">
          {!submitted ? (
            <>
              <h1 className="text-3xl md:text-4xl text-blue-900 font-extrabold mb-8 text-center">
                Esperamos por ti!
              </h1>
              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-lg">
                    Comprovativo de pagamento:
                  </label>
                  <input
                    type="file"
                    accept="image/*,application/pdf"
                    onChange={(e) => setFile(e.target.files[0])}
                    className="border border-gray-300 rounded-lg px-4 py-3 text-base md:text-lg bg-white focus:ring-2 focus:ring-blue-400 outline-none transition"
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <label className="font-semibold text-lg">
                    Como deseja receber o bilhete?
                  </label>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2 cursor-pointer text-base md:text-lg">
                      <input
                        type="radio"
                        name="method"
                        value="whatsapp"
                        checked={method === "whatsapp"}
                        onChange={() => setMethod("whatsapp")}
                        className="w-5 h-5 accent-blue-600"
                      />
                      WhatsApp
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer text-base md:text-lg">
                      <input
                        type="radio"
                        name="method"
                        value="email"
                        checked={method === "email"}
                        onChange={() => setMethod("email")}
                        className="w-5 h-5 accent-blue-600"
                      />
                      Email
                    </label>
                  </div>
                </div>

                {method === "whatsapp" && (
                  <div className="flex flex-col gap-2 w-full">
                    <label className="font-semibold text-lg">
                      Número de WhatsApp:
                    </label>
                    <div className="flex flex-col sm:flex-row gap-3 w-full">
                      <select
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                        className="w-full sm:w-[140px] border border-gray-300 rounded-lg px-3 py-3 text-base md:text-lg bg-white focus:ring-2 focus:ring-blue-400 outline-none transition"
                      >
                        <option value="+258">🇲🇿 +258 (Moçambique)</option>
                        <option value="+27">🇿🇦 +27 (África do Sul)</option>
                        <option value="+351">🇵🇹 +351 (Portugal)</option>
                        <option value="+244">🇦🇴 +244 (Angola)</option>
                        <option value="+55">🇧🇷 +55 (Brasil)</option>
                      </select>

                      <input
                        type="tel"
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                        placeholder="8X XXX XXXX"
                        className="flex-1 border border-gray-300 rounded-lg px-4 py-3 text-base md:text-lg bg-white focus:ring-2 focus:ring-blue-400 outline-none transition"
                      />
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      Inclua apenas o número, sem o código do país.
                    </p>
                  </div>
                )}
                
                {method === "email" && (
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold text-lg">Seu Email:</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="exemplo@dominio.com"
                      className="border border-gray-300 rounded-lg px-4 py-3 text-base md:text-lg bg-white focus:ring-2 focus:ring-blue-400 outline-none transition"
                    />
                  </div>
                )}

                <button
                  type="submit"
                  className="mt-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-500 font-bold rounded-xl text-lg px-6 py-4 text-white shadow-md transition-all duration-300"
                >
                  Enviar
                </button>
              </form>
            </>
          ) : (
            <div className="text-center flex flex-col items-center justify-center gap-6 py-10">
              <FaCheckCircle className="text-green-600 text-[90px] md:text-[120px]" />
              <h1 className="text-3xl md:text-4xl text-green-700 font-extrabold">
                Submissão recebida com sucesso!
              </h1>
              <p className="text-gray-800 text-base md:text-lg max-w-md mx-auto">
                Receberá o seu bilhete através de{" "}
                {method === "email"
                  ? `email: ${email}`
                  : `WhatsApp: ${countryCode} ${whatsapp}`}
                .
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BilheteSucesso;
