"use client"

import { useState } from "react"

interface PhaseFiveProps {
  onNext: () => void
}

export function PhaseFive({ onNext }: PhaseFiveProps) {
  const [answer, setAnswer] = useState("")
  const [error, setError] = useState("")
  const [correct, setCorrect] = useState(false)
  const [shake, setShake] = useState(false)

  const handleSubmit = () => {
    const trimmed = answer.trim().toLowerCase()
    if (trimmed === "beach") {
      setError("")
      setCorrect(true)
    } else {
      setError("Hmm, that\u2019s not it\u2026 think again, my love \uD83D\uDC95\uD83E\uDD7A")
      setShake(true)
      setTimeout(() => setShake(false), 500)
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div className="stagger-children max-w-lg">
        <span className="mb-6 block text-5xl md:text-6xl">{"\uD83D\uDCF8"}</span>

        <h1 className="mb-4 text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
          {"One more question about us\u2026 \uD83D\uDC95\uD83E\uDD0D"}
        </h1>

        <p className="mb-8 font-body text-lg text-pink-200/80 md:text-xl">
          {"Where did we click our first photo together? \uD83D\uDCF8\uD83D\uDC96"}
        </p>

        {!correct ? (
          <>
            <div
              className={`mx-auto mb-4 max-w-sm ${shake ? "" : ""}`}
              style={
                shake
                  ? { animation: "shake 0.5s ease-in-out" }
                  : {}
              }
            >
              <input
                type="text"
                value={answer}
                onChange={(e) => {
                  setAnswer(e.target.value)
                  setError("")
                }}
                onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                placeholder="Type your answer..."
                className="romantic-input w-full rounded-xl px-6 py-4 text-center text-lg md:text-xl"
              />
            </div>

            <p className="mb-6 font-body text-sm text-pink-300/60 md:text-base">
              {"Hint: Theatre \uD83C\uDFAD / Park \uD83C\uDF33 / Mall \uD83C\uDFEC / Beach \uD83C\uDFD6\uFE0F / etc."}
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
              {"Check Answer \uD83D\uDC96"}
            </button>
          </>
        ) : (
          <div className="animate-fade-in-up">
            <span className="mb-4 block text-5xl">{"\uD83C\uDF89"}</span>
            <p className="mb-8 font-body text-xl text-pink-100 md:text-2xl">
              {"Yes! You remember! \uD83D\uDC96\u2728"}
            </p>
            <button
              onClick={onNext}
              className="glow-button animate-pulse-glow rounded-full bg-pink-600 px-10 py-4 text-lg font-semibold text-white transition-all hover:bg-pink-500 md:px-14 md:py-5 md:text-xl"
            >
              {"Continue to Proceed \uD83D\uDC98"}
            </button>
          </div>
        )}
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
