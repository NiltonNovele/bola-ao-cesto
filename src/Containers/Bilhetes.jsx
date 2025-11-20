import React, { useState } from "react";
import { images } from "../Constants";

const TICKET_PRICE_MZN = 2;

const TicketPurchase = () => {
  const [quantity, setQuantity] = useState(1);
  const [loadingPayment, setLoadingPayment] = useState(false);
  const [errors, setErrors] = useState("");

  const handlePayment = async () => {
    const qty = Number(quantity);
    if (!qty || qty < 1) return setErrors("Quantidade inválida.");

    try {
      setLoadingPayment(true);
      setErrors("");

      const API_URL = "https://api.bolaocesto.com/api/order/create";

      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quantity: qty }),
      });

      const data = await response.json();

      if (data.error) {
        setErrors(data.error);
        setLoadingPayment(false);
        return;
      }

      if (!data.checkout_url) {
        setErrors("Erro ao iniciar o pagamento.");
        setLoadingPayment(false);
        return;
      }

      window.location.href = data.checkout_url;
    } catch (err) {
      console.error(err);
      setErrors("Erro de rede. Tenta novamente.");
    } finally {
      setLoadingPayment(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handlePayment();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-[140px] pb-[40px]"
      style={{ backgroundImage: "url('/hero1.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
      
      {loadingPayment && (
        <div className="w-full h-screen fixed z-20 bg-black/30 flex items-center justify-center">
          <img src={images.spinner} alt="Carregando" width={150} />
        </div>
      )}

      <form className="w-full sm:w-[80%] md:w-[650px] flex flex-col gap-6 bg-white/95 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-gray-200"
        onSubmit={handleSubmit}>

        <div className="flex justify-center mb-5">
          <img src="/bac.png" alt="Bola AO Cesto" className="h-24 md:h-32" />
        </div>

        <h1 className="text-2xl font-bold text-center text-blue-700 mb-4">Comprar Bilhete(s)</h1>

        {errors && <div className="bg-red-100 text-red-700 p-3 rounded">{errors}</div>}

        <div className="flex flex-col gap-3">
          <label className="font-semibold">Quantidade de bilhetes ({TICKET_PRICE_MZN} MT cada):</label>
          <input type="number" min="1" value={quantity} 
                 onChange={e => setQuantity(Number(e.target.value) || 0)}
                 className="py-3 px-4 rounded-lg outline-none border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent"/>
        </div>

        <button type="submit"
          className="mt-5 bg-gradient-to-br from-blue-500 to-yellow-400 hover:from-yellow-400 hover:to-blue-500 font-bold rounded-lg text-sm px-5 py-3 text-white shadow-md transition-transform transform hover:scale-105">
          Comprar Bilhete
        </button>
      </form>
    </div>
  );
};

export default TicketPurchase;
