import React from "react";
import { CheckCircle } from "lucide-react";
import { useLocation, Link } from "react-router-dom";

const BilheteSucesso = () => {
  const location = useLocation();

  // Retrieve metadata passed by Riha (optional)
  const queryParams = new URLSearchParams(location.search);
  const quantity = queryParams.get("quantity") || 1;

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-6"
      style={{
        backgroundImage: "url('/hero1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white/90 p-10 rounded-2xl shadow-xl text-center w-full max-w-lg">
        <CheckCircle className="text-green-600 mx-auto mb-4" size={80} />

        <h1 className="text-3xl font-bold mb-2">Pagamento Concluído!</h1>
        <p className="text-gray-700 text-lg">
          O seu pagamento foi confirmado com sucesso.
        </p>

        <p className="mt-4 text-gray-800 text-lg">
          Bilhetes comprados:{" "}
          <span className="font-semibold">{quantity}</span>
        </p>

        <p className="mt-2 text-gray-600 text-sm">
          Obrigado por apoiar o evento. O seu bilhete será enviado automaticamente.
        </p>

        <Link
          to="/"
          className="mt-6 inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-700"
        >
          Voltar à Página Inicial
        </Link>
      </div>
    </div>
  );
};

export default BilheteSucesso;
