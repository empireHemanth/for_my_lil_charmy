"use client"

import { useState } from "react"
import Image from "next/image"

export function PhaseFinal() {
  const [revealed, setRevealed] = useState(false)

  return (
    <div className="light-phase flex min-h-screen flex-col items-center justify-center px-6 py-12 text-center">
      <div className="stagger-children max-w-2xl">
        {!revealed ? (
          <>
            <span className="mb-6 block text-6xl animate-heartbeat md:text-7xl">
              {"\uD83D\uDC91"}
            </span>

            <h1 className="mb-4 text-3xl font-bold leading-tight tracking-tight text-[#3d1520] md:text-4xl lg:text-5xl">
              {"Do you want to see"}
            </h1>
            <h1 className="mb-10 text-3xl font-bold leading-tight tracking-tight text-[#e11d48] md:text-4xl lg:text-5xl">
              {"us together? \uD83D\uDC91\uD83D\uDC96"}
            </h1>

            <button
              onClick={() => setRevealed(true)}
              className="glow-button animate-pulse-glow rounded-full bg-[#e11d48] px-14 py-5 text-xl font-semibold text-white transition-all hover:bg-[#be123c] md:px-16 md:py-6 md:text-2xl"
            >
              {"YES \uD83D\uDC98"}
            </button>
          </>
        ) : (
          <div className="animate-fade-in-up">
            {/* Together photo */}
            <div className="relative mx-auto mb-8 aspect-[4/3] max-w-lg overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/photos/together.jpg"
                alt="Us together"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 512px"
                priority
              />
              {/* Soft glow overlay */}
              <div className="absolute inset-0 bg-pink-400/10" />
            </div>

            {/* Final message */}
            <div className="mx-auto max-w-lg">
              <p className="mb-3 font-body text-lg leading-relaxed text-[#3d1520] md:text-xl">
                {"No matter where life takes us \uD83C\uDF0D,"}
              </p>
              <p className="mb-3 font-body text-lg leading-relaxed text-[#3d1520] md:text-xl">
                {"I just want you beside me \uD83E\uDD0D."}
              </p>
              <p className="mb-3 font-body text-lg leading-relaxed text-[#3d1520] md:text-xl">
                {"You are my heart \u2764\uFE0F, my happiness \uD83D\uDE0A, my forever \u267E\uFE0F."}
              </p>
              <p className="mt-6 text-xl font-bold italic text-[#e11d48] md:text-2xl">
                {"I love you more than words can ever express \uD83D\uDC96\uD83D\uDC8C"}
              </p>
            </div>

            {/* Decorative hearts */}
            <div className="mt-8 flex items-center justify-center gap-3">
              {["\u2764\uFE0F", "\uD83D\uDC95", "\uD83D\uDC96", "\uD83D\uDC9E", "\uD83D\uDC98"].map((heart, i) => (
                <span
                  key={i}
                  className="text-2xl animate-float md:text-3xl"
                  style={{ animationDelay: `${i * 0.3}s` }}
                >
                  {heart}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
