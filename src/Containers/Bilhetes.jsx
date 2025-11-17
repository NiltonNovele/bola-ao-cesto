import React, { useState } from "react";
import { images } from "../Constants";

const TICKET_PRICE_MZN = 1;

// Base URL do backend local
 const API_BASE = "https://api.bolaocesto.com";

const TicketPurchase = () => {
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("mpesa");
  const [errors, setErrors] = useState("");

  const validateForm = () => {
    if (!quantity || quantity < 1) {
      setErrors("Escolha pelo menos 1 bilhete!");
      return false;
    }
    setErrors("");
    return true;
  };

  const createOrderAndGetCheckout = async () => {
    try {
      const response = await fetch(`${API_BASE}/api/create-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quantity }),
      });

      const json = await response.json();

      if (!response.ok) {
        console.error("Erro criar order:", json);
        alert("Erro ao iniciar pagamento. Veja console.");
        return null;
      }

      return json.checkout_url || json.url || null;
    } catch (err) {
      console.error("Erro criar order:", err);
      alert("Erro ao conectar com o servidor.");
      return null;
    }
  };

  const handlePurchase = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    const checkoutUrl = await createOrderAndGetCheckout();
    setLoading(false);

    if (checkoutUrl) {
      window.location.href = checkoutUrl;
    }
  };

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
        <div className="w-full h-screen fixed z-20 bg-black/30 flex items-center justify-center">
          <img src={images.spinner} alt="Carregando" width={150} />
        </div>
      )}

      <form
        className="w-full sm:w-[80%] md:w-[650px] flex flex-col gap-6 bg-white/95 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-gray-200"
        onSubmit={handlePurchase}
      >
        <div className="flex justify-center mb-5">
          <img src="/bac.png" alt="Bola AO Cesto" className="h-24 md:h-32" />
        </div>

        <h1 className="text-2xl font-bold text-center text-blue-700 mb-4">
          Comprar Bilhete(s)
        </h1>

        {errors && (
          <div className="bg-red-100 text-red-700 p-3 rounded">{errors}</div>
        )}

        <div className="flex flex-col gap-3">
          <label className="font-semibold">
            Quantidade de bilhetes ({TICKET_PRICE_MZN} MT cada):
          </label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="py-3 px-4 rounded-lg outline-none border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          />
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="font-semibold text-lg">Método de Pagamento:</h2>
          <div className="flex flex-wrap gap-5">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="payment"
                value="mpesa"
                checked={paymentMethod === "mpesa"}
                onChange={() => setPaymentMethod("mpesa")}
                className="accent-blue-500"
              />
              M-Pesa
            </label>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 p-5 rounded-xl shadow-sm">
          <h2 className="font-semibold text-lg mb-2">
            Pagamento Online via {paymentMethod.toUpperCase()}
          </h2>
          <p className="text-gray-700 text-sm">
            Clique em <b>“Comprar Bilhete”</b> para ser redirecionado(a) para a página de pagamento segura. Confirme o pagamento no seu telemóvel e, quando concluído, você será redirecionado(a) para a página do seu bilhete.
          </p>
        </div>

        <button
          type="submit"
          className="mt-5 bg-gradient-to-br from-blue-500 to-yellow-400 hover:from-yellow-400 hover:to-blue-500 font-bold rounded-lg text-sm px-5 py-3 text-white shadow-md transition-transform transform hover:scale-105"
        >
          Comprar Bilhete
        </button>
      </form>
    </div>
  );
};

export default TicketPurchase;
