import React, { useState } from "react";
import { images } from "../Constants";

const TICKET_PRICE_MZN = 1; // 100MZN per ticket

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

  const createPaymentLink = async () => {
  const amount = TICKET_PRICE_MZN * quantity;

  try {
    const response = await fetch("http://localhost:5004/api/create-payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount,
        currency: "MT",
        description: `Bilhete(s) BAC x ${quantity}`,
        redirect_url: `http://localhost:3000/BilheteSucesso?quantity=${quantity}`,
        webhook_url: "http://localhost:3000webhooks/payment",
        metadata: { quantity },
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error("Erro ao criar link:", result);
      alert("Erro ao gerar link de pagamento.");
      return null;
    }

    return result.checkout_url; 
  } catch (error) {
    console.error("Erro geral:", error);
    alert("Erro de rede ao criar o link de pagamento.");
    return null;
  }
};


  const handlePurchase = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    const checkoutUrl = await createPaymentLink();
    setLoading(false);

    if (checkoutUrl) window.location.href = checkoutUrl;
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
        <div className="w-full h-screen fixed z-20 bg-black/20 flex items-center justify-center">
          <img src={images.spinner} alt="Carregando" width={200} />
        </div>
      )}

      <form
        className="w-full sm:w-[80%] md:w-[650px] flex flex-col gap-6 bg-white/90 p-8 rounded-2xl shadow-xl"
        onSubmit={handlePurchase}
      >
        <div className="flex justify-center mb-5">
          <img src="/bac.png" alt="Bola AO Cesto" className="h-20 md:h-28" />
        </div>

        <div className="flex flex-col gap-2">
          Quantidade de bilhetes ({TICKET_PRICE_MZN} MT cada)
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="py-3 px-4 rounded-lg outline-none border bg-white"
          />
          {errors && <p className="text-red-500 text-sm">{errors}</p>}
        </div>

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
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 p-5 rounded-xl shadow-sm">
          <h2 className="font-semibold text-lg mb-2">
            Pagamento Online via ({paymentMethod.toUpperCase()}):
          </h2>
          <p>
            Clique em <b>“Comprar Bilhete”</b> para concluir o pagamento numa
            página segura.
          </p>
        </div>

        <button
          type="submit"
          className="mt-5 bg-gradient-to-br from-blue-500 to-yellow-400 hover:from-yellow-400 hover:to-blue-500 font-bold rounded-lg text-sm px-5 py-3 text-white shadow-md"
        >
          Comprar Bilhete
        </button>
      </form>
    </div>
  );
};

export default TicketPurchase;
