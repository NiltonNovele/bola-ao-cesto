import React, { useState, useEffect } from "react";
import { images } from "../Constants";
import { PiWarning } from "react-icons/pi";

const TicketPurchase = () => {
  const TICKET_PRICE = 50; // fixed price
  const SALE_START_DATE = new Date("2025-08-29T00:00:00"); // ticket sale opens
  const [data, setData] = useState({
    nome: "",
    telefone: "",
    quantity: 1, // number of tickets
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    nome: "",
    telefone: "",
    quantity: "",
    payment: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("mpesa");

  // Countdown state
  const [countdown, setCountdown] = useState("");

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { nome: "", telefone: "", quantity: "", payment: "" };

    if (!data.nome) {
      newErrors.nome = "Nome é obrigatório!";
      valid = false;
    }
    if (!data.telefone) {
      newErrors.telefone = "Telefone é obrigatório!";
      valid = false;
    }
    if (!data.quantity || data.quantity < 1) {
      newErrors.quantity = "Escolha pelo menos 1 bilhete!";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handlePurchase = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    const totalAmount = TICKET_PRICE * data.quantity;

    // Simulate payment endpoint
    setTimeout(() => {
      alert(
        `Pagamento de ${totalAmount} MT (${data.quantity} bilhete${
          data.quantity > 1 ? "s" : ""
        }) via ${paymentMethod.toUpperCase()} realizado com sucesso!`
      );
      setLoading(false);
    }, 1500);
  };

  useEffect(() => {
    document.title = "Comprar Bilhete | Bola AO Cesto";

    // Countdown interval
    const interval = setInterval(() => {
      const now = new Date();
      const diff = SALE_START_DATE - now;

      if (diff <= 0) {
        setCountdown("As vendas estão abertas!");
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
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start pt-[140px] pb-[20px]"
      style={{
        backgroundImage: "url('/hero1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {loading && (
        <div className="w-full h-screen fixed z-20 bg-black/20 flex items-center justify-center">
          <img src={images.spinner} alt="" width={200} />
        </div>
      )}

      {/* Countdown */}
      <div className="mb-5 text-white font-bold text-xl md:text-3xl text-center bg-black/50 p-3 rounded">
        <p>Faltam {countdown} para venda de bilhetes!</p>
      </div>

      {/* Form */}
      <form
        className="w-full sm:w-[80%] md:w-[600px] flex flex-col gap-5 bg-white/70 p-8 rounded-lg"
        onSubmit={handlePurchase}
      >
        {/* Logo */}
        <div className="flex justify-center mb-5">
          <img src="/bac.png" alt="Bola AO Cesto" className="h-20 md:h-28" />
        </div>

        {/* Nome */}
        <div className="flex flex-col gap-2">
          Nome
          <input
            type="text"
            name="nome"
            placeholder="Seu nome"
            value={data.nome}
            onChange={handleChange}
            style={{
              borderColor: errors.nome
                ? "rgba(255,0,0,0.75)"
                : "rgba(53,50,50,0.55)",
            }}
            className="py-2 px-4 rounded outline-none border-[1px] bg-transparent"
          />
          {errors.nome && (
            <p className="text-red-400 text-[13px]">{errors.nome}</p>
          )}
        </div>

        {/* Telefone */}
        <div className="flex flex-col gap-2">
          Telefone
          <input
            type="tel"
            name="telefone"
            placeholder="Número de telemóvel"
            value={data.telefone}
            onChange={handleChange}
            style={{
              borderColor: errors.telefone
                ? "rgba(255,0,0,0.75)"
                : "rgba(53,50,50,0.55)",
            }}
            className="py-2 px-4 rounded outline-none border-[1px] bg-transparent"
          />
          {errors.telefone && (
            <p className="text-red-400 text-[13px]">{errors.telefone}</p>
          )}
        </div>

        {/* Quantity */}
        <div className="flex flex-col gap-2">
          Quantidade de bilhetes (50 MT cada)
          <input
            type="number"
            name="quantity"
            min="1"
            value={data.quantity}
            onChange={handleChange}
            style={{
              borderColor: errors.quantity
                ? "rgba(255,0,0,0.75)"
                : "rgba(53,50,50,0.55)",
            }}
            className="py-2 px-4 rounded outline-none border-[1px] bg-transparent"
          />
          {errors.quantity && (
            <p className="text-red-400 text-[13px]">{errors.quantity}</p>
          )}
        </div>

        {/* Payment Method */}
        <div className="flex flex-col gap-2">
          <h1 className="font-orbitron text-[20px] md:text-[24px] mb-2">
            Método de Pagamento:
          </h1>
          <div className="flex gap-5">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="payment"
                value="mpesa"
                checked={paymentMethod === "mpesa"}
                onChange={() => setPaymentMethod("mpesa")}
              />
              M-Pesa
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="payment"
                value="emola"
                checked={paymentMethod === "emola"}
                onChange={() => setPaymentMethod("emola")}
              />
              eMola
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="payment"
                value="paypal"
                checked={paymentMethod === "emola"}
                onChange={() => setPaymentMethod("emola")}
              />
              PayPal
            </label>
          </div>
        </div>

        <button className="mt-5 bg-gradient-to-br from-blue-400 to-yellow-300 hover:from-yellow-300 hover:to-blue-400 font-bold rounded-lg text-sm px-5 py-3 text-center text-white">
          Comprar Bilhete
        </button>
      </form>
    </div>
  );
};

export default TicketPurchase;
