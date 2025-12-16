"use client"

import { useState, useEffect } from "react"
import { Eye } from "lucide-react"

export function OnlineCounter() {
  const [count, setCount] = useState(1247)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        const change = Math.floor(Math.random() * 10) - 4
        const newCount = prev + change
        return Math.max(1200, Math.min(1300, newCount))
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-500/90 text-white rounded-full shadow-md text-xs md:text-sm backdrop-blur-sm">
      <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
      <Eye className="h-3.5 w-3.5" />
      <span className="font-semibold">{count.toLocaleString()} online</span>
    </div>
  )
}
