import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

// Base URL do backend local
 const API_BASE = "https://api.bolaocesto.com";

export default function BilheteSucesso() {
  const q = useQuery();
  const orderId = q.get("order_id");
  const token = q.get("token");

  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState(null);
  const [tickets, setTickets] = useState([]);
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!orderId || !token) {
      setError("Missing order_id or token.");
      setLoading(false);
      return;
    }

    fetch(`${API_BASE}/api/order/${orderId}?access_token=${encodeURIComponent(token)}`)
      .then(async (r) => {
        if (!r.ok) throw new Error(await r.text());
        return r.json();
      })
      .then((json) => {
        setOrder(json.order);
        setTickets(json.tickets || []);
        if (json.order?.customerName) setFullName(json.order.customerName);
      })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [orderId, token]);

  const handleSaveName = async () => {
    if (!fullName.trim()) {
      alert("Por favor, insira o seu nome completo.");
      return;
    }

    try {
      const resp = await fetch(`${API_BASE}/api/update-tickets`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderId, fullName }),
      });

      const data = await resp.json();
      if (!resp.ok) throw new Error(data.error || "Erro ao atualizar tickets");

      alert("Nome atualizado com sucesso!");
      setTickets(data.tickets);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  if (loading) return <p>Carregando...</p>;
  if (error) return <div className="p-4 bg-red-50 text-red-700">{error}</div>;
  if (!order) return <div className="p-4">Sem dados.</div>;

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Pagamento Confirmado — Os seus bilhetes</h1>
      <p className="mb-2"><strong>Order:</strong> {order._id} — Status: {order.status}</p>
      <p className="mb-4"><strong>Valor:</strong> {order.amount} {order.currency}</p>

      <div className="mb-6">
        <label className="block font-semibold mb-2">Seu nome completo:</label>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="w-full border px-3 py-2 rounded"
        />
        <button
          onClick={handleSaveName}
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Salvar Nome
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {tickets.map((t) => (
          <div key={t._id} className="p-4 bg-white border rounded shadow">
            <p><strong>Ticket Code:</strong> {t.ticketCode}</p>
            <p><strong>Nome:</strong> {t.customerName || fullName}</p>
            <p><strong>Status:</strong> {t.status}</p>
            {t.paidAt && <p><strong>Pago em:</strong> {new Date(t.paidAt).toLocaleString()}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
