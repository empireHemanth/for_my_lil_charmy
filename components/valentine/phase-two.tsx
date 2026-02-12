"use client"

interface PhaseTwoProps {
  onNext: () => void
}

export function PhaseTwo({ onNext }: PhaseTwoProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div className="stagger-children max-w-2xl">
        <span className="mb-6 block text-6xl animate-heartbeat md:text-7xl">
          {"\uD83D\uDC95"}
        </span>

        <h1 className="mb-8 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
          {"Wow, you\u2019re my Valentine! \uD83D\uDC95\uD83C\uDF39"}
        </h1>

        <div className="letter-box mx-auto mb-10 max-w-lg rounded-2xl p-6 md:p-8">
          <p className="font-body text-base leading-relaxed text-pink-100/90 md:text-lg">
            {"With you, life feels magical \u2728\uD83D\uDCAB"}
          </p>
          <p className="mt-3 font-body text-base leading-relaxed text-pink-100/90 md:text-lg">
            {"We enjoy, we care, we love, and we laugh together \uD83E\uDD0D\uD83D\uDE0A"}
          </p>
          <p className="mt-3 font-body text-base leading-relaxed text-pink-100/90 md:text-lg">
            {"Every moment with you is my favorite memory \uD83D\uDCF8\uD83D\uDC9E"}
          </p>
          <p className="mt-4 font-body text-base italic leading-relaxed text-pink-200 md:text-lg">
            {"You are my today \uD83C\uDF05 and all my tomorrows \uD83C\uDF19\uD83D\uDC91, my love \uD83D\uDC96"}
          </p>
        </div>

        <button
          onClick={onNext}
          className="glow-button animate-pulse-glow rounded-full bg-pink-600 px-10 py-4 text-lg font-semibold text-white transition-all hover:bg-pink-500 md:px-14 md:py-5 md:text-xl"
        >
          {"Click to Open My Heart \uD83D\uDC8C"}
        </button>
      </div>
    </div>
  )
}
