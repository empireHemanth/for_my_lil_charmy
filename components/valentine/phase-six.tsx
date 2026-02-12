"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface PhaseSixProps {
  onNext: () => void
}

const photos = [
  {
    src: "/photos/photo1.jpg",
    caption:
      "Just like the quote says, words really do fall short when I try to describe how much light you bring into my world. \u2728\uD83C\uDF1F\uD83D\uDC96",
  },
  {
    src: "/photos/photo2.jpg",
    caption:
      "Your smile is so beautiful \uD83D\uDE0A\uD83D\uDC9E. This photo shows exactly why you\u2019re so special to me \uD83D\uDC95\uD83C\uDF39.",
  },
  {
    src: "/photos/photo3.jpg",
    caption:
      "You have this amazing way of making the most ordinary places feel special \uD83C\uDF38\u2728 just by being in them. You\u2019re the heart of every moment \uD83D\uDC96\u267E\uFE0F.",
  },
  {
    src: "/photos/photo4.jpg",
    caption:
      "You look like a dream draped in gold \uD83D\uDC9B\u2728, and my heart falls for you all over again every time I see you \uD83D\uDC96\uD83C\uDF39. If loving you is a journey, I want to walk it forever by your side \u267E\uFE0F\uD83D\uDC91.",
  },
  {
    src: "/photos/photo5.jpg",
    caption:
      "I love how you look when you\u2019re laughing \uD83D\uDE04\uD83D\uDC9E. You look so happy and natural here \uD83C\uDF38\u2728.",
  },
]

export function PhaseSix({ onNext }: PhaseSixProps) {
  const [current, setCurrent] = useState(0)
  const [viewedPhotos, setViewedPhotos] = useState<Set<number>>(new Set([0]))
  const [showPopup, setShowPopup] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const allViewed = viewedPhotos.size === photos.length

  // Autoplay music on mount
  useEffect(() => {
    const audio = new Audio("/music/tum-hi-ho.mp3")
    audio.loop = true
    audio.volume = 0.5
    audioRef.current = audio

    const playPromise = audio.play()
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay blocked: play on first user interaction
        const resumeAudio = () => {
          audio.play().catch(() => {})
          document.removeEventListener("click", resumeAudio)
          document.removeEventListener("touchstart", resumeAudio)
        }
        document.addEventListener("click", resumeAudio)
        document.addEventListener("touchstart", resumeAudio)
      })
    }

    return () => {
      audio.pause()
      audio.src = ""
      audioRef.current = null
    }
  }, [])

  const goTo = useCallback(
    (index: number) => {
      let next = index
      if (next < 0) next = photos.length - 1
      else if (next >= photos.length) next = 0

      setCurrent(next)
      setViewedPhotos((prev) => new Set(prev).add(next))
    },
    []
  )

  const handleContinue = () => {
    if (!allViewed) {
      setShowPopup(true)
      setTimeout(() => setShowPopup(false), 3000)
      return
    }
    // Stop music before leaving
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.src = ""
    }
    onNext()
  }

  return (
    <div className="light-phase relative flex min-h-screen flex-col items-center justify-center px-4 py-12 text-center md:px-6">
      {/* Popup message when trying to skip */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <div className="animate-fade-in-up mx-4 rounded-2xl bg-white px-8 py-6 shadow-2xl">
            <p className="text-lg font-semibold text-[#e11d48]">
              {"Please view all our memories first \u2764\uFE0F\uD83E\uDD7A"}
            </p>
            <p className="mt-2 font-body text-sm text-[#5c1a2a]">
              {"You\u2019ve seen "}
              {viewedPhotos.size}
              {" of "}
              {photos.length}
              {" photos. Use the arrows to see them all \uD83D\uDC95"}
            </p>
          </div>
        </div>
      )}

      <div className="stagger-children w-full max-w-2xl">
        <span className="mb-4 block text-5xl md:text-6xl">{"\uD83D\uDCF8"}</span>

        <h1 className="mb-8 text-3xl font-bold leading-tight tracking-tight text-[#3d1520] md:text-4xl lg:text-5xl">
          {"she's my forever\uD83C\uDF39\uD83D\uDC97\uD83D\uDC8C\u2728"}
        </h1>

        {/* Navigation Arrows - Above Image */}
        <div className="mb-4 flex items-center justify-center gap-6">
          <button
            onClick={() => goTo(current - 1)}
            className="rounded-full bg-[#e11d48] p-3 text-white shadow-lg transition-all hover:bg-[#be123c] hover:shadow-xl active:scale-95 md:p-4"
            aria-label="Previous photo"
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
          </button>

          <span className="font-body text-sm font-medium text-[#5c1a2a] md:text-base">
            {current + 1} / {photos.length}
          </span>

          <button
            onClick={() => goTo(current + 1)}
            className="rounded-full bg-[#e11d48] p-3 text-white shadow-lg transition-all hover:bg-[#be123c] hover:shadow-xl active:scale-95 md:p-4"
            aria-label="Next photo"
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
          </button>
        </div>

        {/* Photo */}
        <div className="relative mx-auto mb-4 overflow-hidden rounded-2xl shadow-2xl">
          <div className="relative aspect-[3/4] w-full bg-[#5c1a2a]/10">
            <Image
              key={current}
              src={photos[current].src}
              alt={`Memory ${current + 1}`}
              fill
              className="animate-fade-in object-cover"
              sizes="(max-width: 768px) 100vw, 640px"
              priority
            />
          </div>

          {/* Dots indicator - filled if viewed */}
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            {photos.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-2.5 w-2.5 rounded-full transition-all ${
                  i === current
                    ? "w-6 bg-white"
                    : viewedPhotos.has(i)
                      ? "bg-white/80"
                      : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to photo ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Caption below image */}
        <div className="mb-10 min-h-[80px] px-2">
          <p
            key={current}
            className="animate-fade-in font-body text-base italic leading-relaxed text-[#5c1a2a] md:text-lg"
          >
            {photos[current].caption}
          </p>
        </div>

        <button
          onClick={handleContinue}
          className={`glow-button rounded-full px-10 py-4 text-lg font-semibold text-white transition-all md:px-14 md:py-5 md:text-xl ${
            allViewed
              ? "animate-pulse-glow bg-[#e11d48] hover:bg-[#be123c]"
              : "cursor-not-allowed bg-[#e11d48]/40"
          }`}
        >
          {"Continue \uD83D\uDC98"}
        </button>

        {/* Viewed counter hint */}
        {!allViewed && (
          <p className="mt-4 animate-fade-in font-body text-xs text-[#5c1a2a]/60">
            {"Viewed "}
            {viewedPhotos.size}
            {" of "}
            {photos.length}
            {" memories \u2014 see them all to continue"}
          </p>
        )}
      </div>
    </div>
  )
}
