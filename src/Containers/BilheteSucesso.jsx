import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BilheteSucesso() {
  const [loading, setLoading] = useState(true);
  const [ticket, setTicket] = useState(null); // single ticket
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [saved, setSaved] = useState(false); // track if info was saved
  const navigate = useNavigate();

  const API_BASE = "https://api.bolaocesto.com";

  // Generate unique BAC code
  const generateTicketCode = () => {
    const randomPart = () => Math.floor(100 + Math.random() * 900).toString();
    return `BAC-${randomPart()}-${randomPart()}-${randomPart()}-STX`;
  };

  // On page load, generate ticket object
  useEffect(() => {
    const newTicket = {
      _id: crypto.randomUUID(), // unique identifier for this ticket
      ticketCode: generateTicketCode(),
      status: "pending",
    };
    setTicket(newTicket);
    setLoading(false);
  }, []);

  const handleSave = async () => {
    if (!fullName.trim()) return alert("Insira o seu nome completo.");
    if (!/^8\d{8}$/.test(phone)) return alert("Insira um número de telemóvel válido de Moçambique (8XXXXXXXX).");

    try {
      setLoading(true);
      const resp = await fetch(`${API_BASE}/api/update-tickets`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          orderId: ticket._id,
          fullName,
          phone,
          tickets: [{ _id: ticket._id, ticketCode: ticket.ticketCode }],
        }),
      });

      const data = await resp.json();
      if (!resp.ok) throw new Error(data.error || "Erro ao atualizar ticket");

      setSaved(true); // show confirmation screen
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(ticket.ticketCode);
    alert("Código copiado para a área de transferência!");
  };

  const handleDownload = () => {
    const blob = new Blob([ticket.ticketCode], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${ticket.ticketCode}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  if (loading) return <p>Carregando...</p>;
  if (error) return <div className="p-4 bg-red-50 text-red-700">{error}</div>;
  if (!ticket) return <div className="p-4">Sem ticket.</div>;

  // Confirmation screen after saving
  if (saved) {
    return (
      <div className="p-8 max-w-2xl mx-auto text-center">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="flex flex-col items-center gap-4">
          <div className="text-green-500 text-6xl">✔️</div>
          <h1 className="text-2xl font-bold">Vemo-nos lá!</h1>
          <p>O seu bilhete foi salvo com sucesso.</p>
          <button
            onClick={() => navigate("/")}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Voltar à página inicial
          </button>
        </div>
      </div>
    );
  }

  // Ticket form screen
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Seu Bilhete</h1>

      <div className="p-4 bg-white border rounded shadow flex flex-col gap-4">
        <p><strong>Ticket Code:</strong> {ticket.ticketCode}</p>
        <p><strong>Status:</strong> {ticket.status}</p>
        <div className="flex gap-2">
          <button onClick={handleCopy} className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
            Copiar Código
          </button>
          <button onClick={handleDownload} className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">
            Download
          </button>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-4">
        <label className="block font-semibold">Nome completo:</label>
        <input type="text" value={fullName} onChange={e => setFullName(e.target.value)}
               className="w-full border px-3 py-2 rounded" />

        <label className="block font-semibold">Número de telemóvel (Moçambique):</label>
        <input type="text" value={phone} onChange={e => setPhone(e.target.value)}
               placeholder="8XXXXXXXX"
               className="w-full border px-3 py-2 rounded" />

        <button onClick={handleSave} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Salvar Informações
        </button>
      </div>
    </div>
  );
}
