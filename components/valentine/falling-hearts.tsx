"use client"

import { useEffect, useState } from "react"

interface Heart {
  id: number
  left: number
  size: number
  duration: number
  delay: number
  emoji: string
}

const heartEmojis = ["\u2764\uFE0F", "\uD83D\uDC95", "\uD83D\uDC96", "\uD83C\uDF39", "\u2728", "\uD83D\uDC9E"]

export function FallingHearts({ active }: { active: boolean }) {
  const [hearts, setHearts] = useState<Heart[]>([])

  useEffect(() => {
    if (!active) return

    const interval = setInterval(() => {
      const newHeart: Heart = {
        id: Date.now() + Math.random(),
        left: Math.random() * 100,
        size: 16 + Math.random() * 20,
        duration: 4 + Math.random() * 4,
        delay: 0,
        emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
      }

      setHearts((prev) => [...prev.slice(-20), newHeart])
    }, 600)

    return () => clearInterval(interval)
  }, [active])

  if (!active) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="falling-heart"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`,
          }}
        >
          {heart.emoji}
        </span>
      ))}
    </div>
  )
}
