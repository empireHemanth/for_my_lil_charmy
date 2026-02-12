"use client"

import { useState } from "react"

interface PhaseOneProps {
  onNext: () => void
}

export function PhaseOne({ onNext }: PhaseOneProps) {
  const [showPopup, setShowPopup] = useState(false)
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 })
  const [noAttempts, setNoAttempts] = useState(0)

  const handleNo = () => {
    setShowPopup(true)
    setNoAttempts((prev) => prev + 1)
    // Make the button dodge on subsequent attempts
    if (noAttempts >= 1) {
      const x = Math.random() * 200 - 100
      const y = Math.random() * 200 - 100
      setNoPosition({ x, y })
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      {/* Floating hearts decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <span
            key={i}
            className="absolute text-2xl opacity-20 animate-float md:text-4xl"
            style={{
              left: `${15 + i * 15}%`,
              top: `${10 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.5}s`,
            }}
          >
            {i % 2 === 0 ? "\u2764\uFE0F" : "\uD83C\uDF39"}
          </span>
        ))}
      </div>

      <div className="stagger-children relative z-10">
        <p className="mb-6 text-lg tracking-widest uppercase text-pink-300/70 md:text-xl">
          {"A Special Question..."}
        </p>

        <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
          {"Will you be my"}
        </h1>
        <h1 className="mb-12 text-4xl font-bold leading-tight tracking-tight text-pink-300 md:text-6xl lg:text-7xl">
          {"forever Valentine? \uD83D\uDC96\u267E\uFE0F"}
        </h1>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
          <button
            onClick={onNext}
            className="glow-button animate-pulse-glow rounded-full bg-pink-600 px-12 py-4 text-lg font-semibold text-white transition-all hover:bg-pink-500 md:px-16 md:py-5 md:text-xl"
          >
            {"YES \uD83D\uDC98"}
          </button>

          <button
            onClick={handleNo}
            className="rounded-full border border-white/20 bg-white/5 px-12 py-4 text-lg font-semibold text-white/70 backdrop-blur-sm transition-all hover:bg-white/10 md:px-16 md:py-5 md:text-xl"
            style={{
              transform: `translate(${noPosition.x}px, ${noPosition.y}px)`,
              transition: "transform 0.3s ease",
            }}
          >
            {"NO \uD83D\uDE22"}
          </button>
        </div>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setShowPopup(false)}
        >
          <div
            className="mx-6 max-w-md rounded-2xl border border-pink-500/20 bg-[#3d1520] p-8 text-center shadow-2xl animate-fade-in-up md:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="mb-4 block text-5xl animate-heartbeat">
              {"\uD83E\uDD7A"}
            </span>
            <p className="mb-6 font-body text-lg leading-relaxed text-pink-100 md:text-xl">
              {"Please say yes\u2026 it would make me the happiest person in the world \u2764\uFE0F\uD83E\uDD7A"}
            </p>
            <button
              onClick={() => {
                setShowPopup(false)
                onNext()
              }}
              className="glow-button rounded-full bg-pink-600 px-10 py-3 text-lg font-semibold text-white transition-all hover:bg-pink-500"
            >
              {"Okay, YES! \uD83D\uDC96"}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
