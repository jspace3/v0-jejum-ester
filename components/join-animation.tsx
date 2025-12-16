"use client"

import { useState, useEffect } from "react"
import { UserPlus } from "lucide-react"

const names = [
  "Maria Silva",
  "Ana Costa",
  "Juliana Ferreira",
  "Fernanda Lima",
  "Beatriz Santos",
  "Camila Oliveira",
  "Patricia Mendes",
  "Gabriela Alves",
  "Rafaela Souza",
  "Carla Rodrigues",
  "Daniela Martins",
  "Amanda Pereira",
]

export function JoinAnimation() {
  const [currentName, setCurrentName] = useState("")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const showName = () => {
      const randomName = names[Math.floor(Math.random() * names.length)]
      setCurrentName(randomName)
      setIsVisible(true)

      setTimeout(() => {
        setIsVisible(false)
      }, 3000)
    }

    showName()
    const interval = setInterval(showName, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-8 overflow-hidden">
      <div
        className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="bg-white/90 backdrop-blur-sm border border-amber-200 text-amber-900 px-3 py-1 rounded-full shadow-md flex items-center gap-2 text-xs">
          <UserPlus className="h-3 w-3 text-amber-600" />
          <span className="font-medium">{currentName}</span>
          <span className="text-green-600">entrou no jejum</span>
        </div>
      </div>
    </div>
  )
}
