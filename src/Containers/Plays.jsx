import React, { useState, useEffect, useRef } from "react";
import { data } from "../Constants/data";

const Plays = () => {
  const [selectedEdition, setSelectedEdition] = useState(
    data.editions[0] || { name: "", images: [] }
  );
  const [isMuted, setIsMuted] = useState(false);
  const [viewMode, setViewMode] = useState("slideshow"); // slideshow | grid | videos
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const audioRef = useRef(null);
  const startX = useRef(0);

  // Play background music
  useEffect(() => {
    document.title = "Galeria | BAC";
    if (audioRef.current) {
      audioRef.current.play().catch(() => {});
    }
  }, []);

  // Auto loop slideshow
  useEffect(() => {
    if (viewMode === "slideshow" && selectedEdition.images.length > 0) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) =>
          prev + 1 < selectedEdition.images.length ? prev + 1 : 0
        );
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [viewMode, selectedEdition]);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
    setIsMuted(!isMuted);
  };

  // Swipe gesture handlers
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    const diff = e.changedTouches[0].clientX - startX.current;
    if (diff > 50) {
      // Swipe right
      setCurrentImageIndex((prev) =>
        prev - 1 >= 0 ? prev - 1 : selectedEdition.images.length - 1
      );
    } else if (diff < -50) {
      // Swipe left
      setCurrentImageIndex((prev) =>
        prev + 1 < selectedEdition.images.length ? prev + 1 : 0
      );
    }
  };

  return (
    <div className="bg-white min-h-screen w-full text-gray-900">
      {/* Background Music */}
      <audio ref={audioRef} src="/nanye.mp3" loop autoPlay />

      {/* Header */}
      {/* Header */}
      <div className="max-w-[1400px] mx-auto px-5 py-40 flex justify-between items-center border-b border-gray-200">
        <h3 className="font-orbitron text-royal-blue text-2xl font-semibold">
          Galeria
        </h3>
        <div className="flex items-center gap-3">
          {/* Mute Icon */}
          <button
            onClick={toggleMute}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
          >
            {isMuted ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5v14l12-7L9 5z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5v14l12-7L9 5z"
                />
                <line
                  x1="18"
                  y1="6"
                  x2="18"
                  y2="18"
                  stroke="red"
                  strokeWidth="2"
                />
              </svg>
            )}
          </button>

          {/* Top-right picture */}
          <img
            src="/dunk.png"
            alt="Top Right"
            className="w-10 h-10 object-cover rounded-full shadow-md"
          />
        </div>
      </div>

      {/* Controls */}
      <div className="max-w-[1400px] mx-auto px-5 py-6 flex flex-col md:flex-row md:items-center gap-6">
        {/* Edition Selector */}
        <div className="flex gap-3 items-center">
          <label htmlFor="edition" className="text-lg font-medium">
            Selecionar Edição:
          </label>
          <select
            id="edition"
            value={selectedEdition.name}
            onChange={(e) => {
              const edition = data.editions.find(
                (ed) => ed.name === e.target.value
              );
              setSelectedEdition(edition);
              setCurrentImageIndex(0);
            }}
            className="bg-gray-100 text-gray-900 px-4 py-2 rounded-lg border border-gray-300 hover:border-blue-400 transition"
          >
            {data.editions.map((edition, idx) => (
              <option key={idx} value={edition.name}>
                {edition.name}
              </option>
            ))}
          </select>
        </div>

        {/* View Mode Buttons */}
        <div className="flex gap-3">
          {["slideshow", "grid", "videos"].map((mode) => (
            <button
              key={mode}
              onClick={() => setViewMode(mode)}
              className={`px-4 py-2 rounded-lg transition ${
                viewMode === mode
                  ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {mode.charAt(0).toUpperCase() + mode.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery */}
      <div className="max-w-[1400px] mx-auto px-5 pb-20">
        {viewMode === "slideshow" && (
          <div
            className="relative w-full h-[70vh] bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center shadow-lg"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {selectedEdition.images.length > 0 && (
              <img
                src={selectedEdition.images[currentImageIndex].src}
                alt={selectedEdition.images[currentImageIndex].alt}
                className="w-full h-full object-contain transition-all duration-700"
              />
            )}
          </div>
        )}

        {viewMode === "grid" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4">
            {selectedEdition.images.map((img, i) => (
              <div
                key={i}
                className="relative group overflow-hidden rounded-lg shadow-md"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-[200px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <span className="text-white text-sm">{img.alt}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {viewMode === "videos" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-4">
            {data.videos?.map((vid, i) => (
              <div key={i} className="rounded-lg overflow-hidden shadow-md">
                <iframe
                  width="100%"
                  height="250"
                  src={vid.url}
                  title={vid.title}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
                <div className="p-3 bg-gray-100">
                  <p className="text-gray-800 font-medium">{vid.title}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Plays;
