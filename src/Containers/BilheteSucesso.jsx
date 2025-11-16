// BilheteSucesso.jsx
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const sanitize = (s) => (s ? s.split("?")[0].split("#")[0] : null);

export default function BilheteSucesso() {
  const q = useQuery();
  const orderId = q.get("order_id");
  const token = sanitize(q.get("token") || q.get("access_token"));

  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!orderId || !token) {
      setError("Missing order_id or token.");
      setLoading(false);
      return;
    }

    fetch(`http://84.46.243.149:5004/api/order/${orderId}?access_token=${encodeURIComponent(token)}`)
      .then(async (r) => {
        if (!r.ok) {
          const t = await r.text();
          throw new Error(t || "Failed fetching order");
        }
        return r.json();
      })
      .then((json) => setOrder(json))
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [orderId, token]);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Ticket ID copied to clipboard!");
  };

  const downloadTicket = (ticketId) => {
    const blob = new Blob([`Ticket ID: ${ticketId}`], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `ticket-${ticketId}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  if (loading) return <p>Carregando...</p>;
  if (error) return <div className="p-4 bg-red-50 text-red-700">{error}</div>;
  if (!order) return <div className="p-4">Sem dados.</div>;

  return (
    <div className="p-8">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1 className="text-2xl font-bold mb-4">Pagamento Confirmado — Os seus bilhetes</h1>

      <p className="mb-4">
        <strong>Order:</strong> {order.order.id} — Status: Completed
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {order.tickets.map((t) => (
          <div key={t.id} className="p-4 bg-white border rounded shadow flex flex-col gap-2">
            <p><strong>Ticket ID:</strong> {t.id}</p>
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => copyToClipboard(t.id)}
                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Copiar
              </button>
              <button
                onClick={() => downloadTicket(t.id)}
                className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Baixar
              </button>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-6 text-sm text-gray-600">
        Guarde estes bilhetes no seu telemóvel ou computador.
      </p>
    </div>
  );
}
