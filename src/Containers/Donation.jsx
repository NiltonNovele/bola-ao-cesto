import React, { useState, useEffect } from "react";
import { images } from "../Constants";

const TICKET_PRICE_MZN = 50; 
const TICKET_PRICE_USD = 0.78; 
const SALE_START_DATE = new Date("2025-08-29T00:00:00"); 

const MPESA_NUMBER = "84 123 4567";
const EMOLA_NUMBER = "85 765 4321";

const TicketPurchase = () => {
  const [data, setData] = useState({
    nome: "",
    quantity: 1,
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    nome: "",
    quantity: "",
    payment: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("mpesa");
  const [countdown, setCountdown] = useState("");
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { nome: "", quantity: "", payment: "" };

    if (!data.nome) {
      newErrors.nome = "Nome é obrigatório!";
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

    if (paymentMethod === "paypal") return; // PayPal handled below

    setLoading(true);
    const totalAmount = TICKET_PRICE_MZN * data.quantity;

    setTimeout(() => {
      setLoading(false);
      window.location.href = "/BilheteSucesso";
    }, 1500);
  };

  // Copy number to clipboard
  const copyToClipboard = (number) => {
    navigator.clipboard.writeText(number).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  // Countdown timer
  useEffect(() => {
    document.title = "Comprar Bilhete | BAC";

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

  // Load PayPal Smart Buttons dynamically
  useEffect(() => {
    if (paymentMethod !== "paypal") return;

    const oldScript = document.getElementById("paypal-sdk");
    if (oldScript) oldScript.remove();

    const container = document.getElementById("paypal-button-container");
    if (container) container.innerHTML = "";

    const script = document.createElement("script");
    script.id = "paypal-sdk";
    script.src = `https://www.paypal.com/sdk/js?client-id=AVKmCNwQWDqGmW_U4qIOclA0DKGJLFzkvHridZJ8yh0uRZlnByEv3xMfcucUhtkIvRwKKBbw_tAkbLIU&currency=USD&components=buttons&enable-funding=card`;
    script.async = true;

    script.onload = () => {
      if (window.paypal && window.paypal.Buttons) {
        window.paypal
          .Buttons({
            style: {
              shape: "rect",
              color: "gold",
              layout: "vertical",
              label: "paypal",
            },
            createOrder: (dataOrder, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: (TICKET_PRICE_USD * data.quantity).toFixed(2),
                    },
                  },
                ],
                application_context: {
                  shipping_preference: "NO_SHIPPING",
                },
              });
            },
            onApprove: (dataOrder, actions) => {
              return actions.order.capture().then((details) => {
                alert(
                  `Pagamento concluído por ${details.payer.name.given_name}!`
                );
                window.location.href = "/BilheteSucesso";
              });
            },
            onError: (err) => {
              console.error("PayPal Error:", err);
              alert("Ocorreu um erro ao processar o pagamento.");
            },
          })
          .render("#paypal-button-container");
      }
    };

    document.body.appendChild(script);

    return () => {
      if (container) container.innerHTML = "";
    };
  }, [paymentMethod, data.quantity]);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start pt-[140px] pb-[40px]"
      style={{
        backgroundImage: "url('/hero1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {loading && (
        <div className="w-full h-screen fixed z-20 bg-black/20 flex items-center justify-center">
          <img src={images.spinner} alt="Carregando" width={200} />
        </div>
      )}

      {/* Countdown */}
      <div className="mb-5 text-white font-bold text-xl md:text-3xl text-center bg-black/60 p-4 rounded-lg shadow-lg">
        <p>Faltam {countdown} para venda de bilhetes!</p>
      </div>

      {/* Form */}
      <form
        className="w-full sm:w-[80%] md:w-[650px] flex flex-col gap-6 bg-white/90 p-8 rounded-2xl shadow-xl"
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
            className="py-3 px-4 rounded-lg outline-none border-[1px] bg-white"
          />
          {errors.nome && (
            <p className="text-red-400 text-[13px]">{errors.nome}</p>
          )}
        </div>

        {/* Quantity */}
        <div className="flex flex-col gap-2">
          Quantidade de bilhetes ({TICKET_PRICE_MZN} MT cada)
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
            className="py-3 px-4 rounded-lg outline-none border-[1px] bg-white"
          />
          {errors.quantity && (
            <p className="text-red-400 text-[13px]">{errors.quantity}</p>
          )}
        </div>

        {/* Payment Method */}
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-lg">Método de Pagamento:</h1>
          <div className="flex flex-wrap gap-5">
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
                checked={paymentMethod === "paypal"}
                onChange={() => setPaymentMethod("paypal")}
              />
              PayPal / Cartão
            </label>
          </div>
        </div>

        {/* Info Box - Mpesa/eMola */}
        {(paymentMethod === "mpesa" || paymentMethod === "emola") && (
          <div className="bg-blue-50 border border-blue-200 p-5 rounded-xl shadow-sm">
            <h2 className="font-semibold text-lg mb-2">
              Como pagar com {paymentMethod.toUpperCase()}:
            </h2>
            <p className="mb-3">
              Envie o valor total para o número abaixo e depois clique em{" "}
              <b>“Comprar Bilhete”</b>.
            </p>
            <div className="flex items-center justify-between bg-white p-3 rounded-lg border border-gray-200">
              <span className="font-mono font-bold text-lg">
                {paymentMethod === "mpesa" ? MPESA_NUMBER : EMOLA_NUMBER}
              </span>
              <button
                type="button"
                onClick={() =>
                  copyToClipboard(
                    paymentMethod === "mpesa" ? MPESA_NUMBER : EMOLA_NUMBER
                  )
                }
                className="text-sm bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
              >
                {copied ? "Copiado!" : "Copiar"}
              </button>
            </div>
            <ul className="mt-3 list-disc pl-5 text-sm text-gray-700">
              <li>
                Abra a app {paymentMethod.toUpperCase()} ou digite o codigo no
                seu telemóvel.
              </li>
              <li>
                Escolha a opção de <b>transferência</b>.
              </li>
              <li>Digite o número acima e confirme o valor.</li>
              <li>
                Finalize a transação e clique em <b>Comprar Bilhete</b>.
              </li>
              <li>
                tire um print do comprovante de pagamento e clique no botão
                abaixo e siga os passos na próxima página.
              </li>
            </ul>
          </div>
        )}

        {/* Info Box - PayPal */}
        {paymentMethod === "paypal" && (
          <div className="bg-yellow-50 border border-yellow-200 p-5 rounded-xl shadow-sm">
            <h2 className="font-semibold text-lg mb-2">
              Como pagar com Cartão:
            </h2>
            <p className="mb-3">
              Clique no botão abaixo para efetuar o pagamento seguro através da
              sua conta PayPal ou com cartão de crédito/débito.
            </p>
            <div id="paypal-button-container" className="mt-5"></div>
          </div>
        )}

        {/* Only show Comprar Bilhete for Mpesa/eMola */}
        {paymentMethod !== "paypal" && (
          <button
            type="submit"
            className="mt-5 bg-gradient-to-br from-blue-500 to-yellow-400 hover:from-yellow-400 hover:to-blue-500 font-bold rounded-lg text-sm px-5 py-3 text-center text-white shadow-md"
          >
            Comprar Bilhete
          </button>
        )}
      </form>
    </div>
  );
};

export default TicketPurchase;
