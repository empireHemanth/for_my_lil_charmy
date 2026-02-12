"use client"

import { useState } from "react"

interface PhaseThreeProps {
  onNext: () => void
}

export function PhaseThree({ onNext }: PhaseThreeProps) {
  const [code, setCode] = useState("")
  const [error, setError] = useState("")
  const [shake, setShake] = useState(false)

  const handleSubmit = () => {
    const trimmed = code.trim()
    if (trimmed === "02/10/2025") {
      setError("")
      onNext()
    } else {
      setError("Oops\u2026 try again, my love \u2764\uFE0F\uD83E\uDD7A")
      setShake(true)
      setTimeout(() => setShake(false), 500)
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div className="stagger-children max-w-lg">
        <span className="mb-6 block text-5xl md:text-6xl">{"\uD83D\uDD10"}</span>

        <h1 className="mb-4 text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
          {"Before entering my heart \u2764\uFE0F"}
        </h1>
        <p className="mb-8 font-body text-lg text-pink-200/80 md:text-xl">
          {"to see what\u2019s inside, enter the passcode \uD83D\uDD10"}
        </p>

        <div
          className={`mx-auto mb-4 max-w-sm transition-transform ${shake ? "animate-[shake_0.5s_ease-in-out]" : ""}`}
          style={
            shake
              ? {
                  animation: "shake 0.5s ease-in-out",
                }
              : {}
          }
        >
          <input
            type="text"
            value={code}
            onChange={(e) => {
              setCode(e.target.value)
              setError("")
            }}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            placeholder="dd/mm/yyyy"
            className="romantic-input w-full rounded-xl px-6 py-4 text-center text-lg md:text-xl"
          />
        </div>

        <p className="mb-6 font-body text-sm text-pink-300/60 md:text-base">
          {"Hint: \u201CWhen did we start loving each other mutually?\u201D \uD83D\uDC95"}
          <br />
          {"Format: dd/mm/yyyy \uD83D\uDCC5"}
        </p>

        {error && (
          <p className="mb-6 font-body text-base text-pink-300 animate-fade-in md:text-lg">
            {error}
          </p>
        )}

        <button
          onClick={handleSubmit}
          className="glow-button rounded-full bg-pink-600 px-10 py-4 text-lg font-semibold text-white transition-all hover:bg-pink-500 md:px-14 md:py-5 md:text-xl"
        >
          {"Unlock My Heart \u2764\uFE0F"}
        </button>
      </div>

      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-10px); }
          40% { transform: translateX(10px); }
          60% { transform: translateX(-8px); }
          80% { transform: translateX(8px); }
        }
      `}</style>
    </div>
  )
}
