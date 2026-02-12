"use client"

import { useState, useCallback, useRef } from "react"
import { PhaseOne } from "@/components/valentine/phase-one"
import { PhaseTwo } from "@/components/valentine/phase-two"
import { PhaseThree } from "@/components/valentine/phase-three"
import { PhaseFour } from "@/components/valentine/phase-four"
import { PhaseFive } from "@/components/valentine/phase-five"
import { PhaseSix } from "@/components/valentine/phase-six"
import { PhaseFinal } from "@/components/valentine/phase-final"
import { FallingHearts } from "@/components/valentine/falling-hearts"

const phaseBackgrounds = [
  "phase-bg-1",   // Phase 1 - Deep dark romantic red
  "phase-bg-2",   // Phase 2 - Slightly softer red
  "phase-bg-3",   // Phase 3 - Red + rose blend
  "phase-bg-4",   // Phase 4 - Warm rose tone
  "phase-bg-5",   // Phase 5 - Soft blush
  "phase-bg-6",   // Phase 6 - Light romantic pink
  "phase-bg-final", // Final Phase - Elegant light pink
]

export default function Page() {
  const [phase, setPhase] = useState(0)
  const [transitioning, setTransitioning] = useState(false)
  const [showHearts, setShowHearts] = useState(false)
  const [musicPlaying, setMusicPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const startMusic = useCallback(() => {
    if (audioRef.current && !musicPlaying) {
      audioRef.current.volume = 0.25
      audioRef.current.play().then(() => {
        setMusicPlaying(true)
      }).catch(() => {
        // autoplay blocked
      })
    }
  }, [musicPlaying])

  const toggleMusic = useCallback(() => {
    if (!audioRef.current) return
    if (musicPlaying) {
      audioRef.current.pause()
      setMusicPlaying(false)
    } else {
      audioRef.current.volume = 0.25
      audioRef.current.play().then(() => setMusicPlaying(true)).catch(() => {})
    }
  }, [musicPlaying])

  const goToPhase = useCallback(
    (nextPhase: number) => {
      setTransitioning(true)

      // Start music on first interaction
      if (nextPhase === 1) startMusic()

      // Trigger falling hearts on special transitions
      if (nextPhase === 1 || nextPhase === 6) {
        setShowHearts(true)
        setTimeout(() => setShowHearts(false), 4000)
      }

      // Fade out current phase
      setTimeout(() => {
        setPhase(nextPhase)
        // Scroll to top
        window.scrollTo({ top: 0, behavior: "instant" })
        // Fade in next phase
        setTimeout(() => setTransitioning(false), 100)
      }, 600)
    },
    []
  )

  const renderPhase = () => {
    switch (phase) {
      case 0:
        return <PhaseOne onNext={() => goToPhase(1)} />
      case 1:
        return <PhaseTwo onNext={() => goToPhase(2)} />
      case 2:
        return <PhaseThree onNext={() => goToPhase(3)} />
      case 3:
        return <PhaseFour onNext={() => goToPhase(4)} />
      case 4:
        return <PhaseFive onNext={() => goToPhase(5)} />
      case 5:
        return <PhaseSix onNext={() => goToPhase(6)} />
      case 6:
        return <PhaseFinal />
      default:
        return <PhaseOne onNext={() => goToPhase(1)} />
    }
  }

  return (
    <main
      className={`relative min-h-screen overflow-hidden phase-transition ${phaseBackgrounds[phase]}`}
    >
      {/* Background Music */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        src="https://cdn.pixabay.com/audio/2022/02/23/audio_d1718ab41b.mp3"
      />

      {/* Music toggle button */}
      <button
        onClick={toggleMusic}
        className="fixed right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-lg backdrop-blur-sm transition-all hover:bg-white/25 md:h-12 md:w-12 md:text-xl"
        aria-label={musicPlaying ? "Pause music" : "Play music"}
      >
        {musicPlaying ? "\u{1F3B6}" : "\u{1F507}"}
      </button>

      {/* Falling hearts effect */}
      <FallingHearts active={showHearts} />

      {/* Phase content with fade transition */}
      <div
        className={`transition-opacity duration-500 ease-in-out ${
          transitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        {renderPhase()}
      </div>
    </main>
  )
}
