// BilheteSucesso.jsx
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const BilheteSucesso = () => {
  const q = useQuery();
  const orderId = q.get("order_id");
  const token = q.get("token") || q.get("access_token");

  const [loading, setLoading] = useState(true);
  const [orderInfo, setOrderInfo] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!orderId || !token) {
      setError("Parâmetros inválidos.");
      setLoading(false);
      return;
    }
    fetch(`http://localhost:5004/api/order/${orderId}?access_token=${token}`)
      .then((r) => r.json())
      .then((json) => {
        if (json.error) {
          setError(json.error || "Erro a obter bilhetes.");
        } else {
          setOrderInfo(json);
        }
      })
      .catch((err) => {
        console.error(err);
        setError("Erro de rede.");
      })
      .finally(() => setLoading(false));
  }, [orderId, token]);

  if (loading) return <p>Carregando...</p>;
  if (error) return <div className="p-6 bg-red-50 text-red-700 rounded">{error}</div>;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Pagamento Confirmado — Os seus bilhetes</h1>

      <div className="mb-6">
        <strong>Order:</strong> {orderInfo.order.id} — Status: {orderInfo.order.status}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {orderInfo.tickets.map((t) => (
          <div key={t.id} className="p-4 bg-white border rounded shadow">
            <div><strong>Ticket ID:</strong> {t.id}</div>
            <div><strong>Status:</strong> {t.status}</div>
            <div className="mt-3">
              {t.qrDataUri ? (
                <img src={t.qrDataUri} alt={`QR ${t.id}`} className="w-48 h-48 object-contain" />
              ) : (
                <div className="text-sm text-gray-500">QR ainda não disponível.</div>
              )}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-6 text-sm text-gray-600">
        Guarde estes bilhetes no seu telemóvel. Na entrada, os bilhetes serão verificados
        através do código QR.
      </p>
    </div>
  );
};

export default BilheteSucesso;
