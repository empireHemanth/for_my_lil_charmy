"use client"

interface PhaseFourProps {
  onNext: () => void
}

export function PhaseFour({ onNext }: PhaseFourProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 py-12 text-center">
      <div className="stagger-children max-w-2xl">
        <h1 className="mb-8 text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
          {"Wow, you\u2019re amazing. I think you\u2019re excited \u2764\uFE0F\u2728"}
        </h1>

        <div className="letter-box mx-auto mb-10 rounded-2xl p-6 text-left md:p-10">
          {/* Letter header */}
          <p className="mb-6 text-xl font-semibold italic text-pink-200 md:text-2xl">
            {"To my lil Charmy \uD83E\uDDF3\uD83D\uDC96\uD83C\uDF39,"}
          </p>

          {/* Letter body */}
          <p className="mb-4 font-body text-base leading-relaxed text-pink-100/90 md:text-lg">
            {"Life with you is pure magic \u2728\uD83D\uDCAB. From the way we care for each other \uD83E\uDD0D to the laughter that makes the hard days easier \uD83D\uDE0A, you\u2019ve become the most beautiful chapter of my life \uD83D\uDCD6\uD83D\uDC95."}
          </p>

          <p className="mb-6 font-body text-base leading-relaxed text-pink-100/90 md:text-lg">
            {"Your smile \uD83D\uDE0A truly lights up my darkest days \uD83C\uDF19\uD83C\uDF1F, and I\u2019ve realized that loving you \u2764\uFE0F is the best decision my heart ever made \uD83D\uDC93\uD83D\uDC8D. Every moment with you is my favorite memory \uD83D\uDCF8\uD83D\uDC9E, and I\u2019m so grateful to have you as my today \uD83C\uDF05 and all my tomorrows \uD83C\uDF19\uD83D\uDC91."}
          </p>

          {/* Highlighted quote */}
          <div className="my-6 border-l-2 border-pink-400/50 py-2 pl-6">
            <p className="text-lg font-semibold italic text-pink-200 md:text-xl">
              {"\u201CYou are not just my love\u2026 you are my forever.\u201D \uD83D\uDC8C\u267E\uFE0F"}
            </p>
          </div>

          {/* Signature */}
          <p className="mt-8 text-right text-lg font-semibold italic text-pink-200 md:text-xl">
            {"I am always yours, baby \uD83D\uDC98\uD83D\uDC95"}
          </p>
        </div>

        <button
          onClick={onNext}
          className="glow-button animate-pulse-glow rounded-full bg-pink-600 px-10 py-4 text-lg font-semibold text-white transition-all hover:bg-pink-500 md:px-14 md:py-5 md:text-xl"
        >
          {"Continue \uD83D\uDC9E"}
        </button>
      </div>
    </div>
  )
}
