"use client"

import { useState, useCallback } from "react"
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

  const goToPhase = useCallback(
    (nextPhase: number) => {
      setTransitioning(true)

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
