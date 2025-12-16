"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight, Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"

const images = [
  {
    url: "/jejum-ester-dezembro.jpeg",
    alt: "Jejum de Ester - Dezembro",
  },
  {
    url: "/2.jpeg",
    alt: "Ester se posicionando diante de Deus",
  },
  {
    url: "/3.jpeg",
    alt: "Jejum de consagração e intercessão",
  },
  {
    url: "/4.jpeg",
    alt: "Como será o jejum",
  },
  {
    url: "/5.jpeg",
    alt: "Jejum não é dieta",
  },
  {
    url: "/6.jpeg",
    alt: "Cronograma de oração - Dia 1",
  },
  {
    url: "/7.jpeg",
    alt: "Dia 2 - Revelação e Cura Interior",
  },
  {
    url: "/8.jpeg",
    alt: "Dia 3 - Restituição e Posicionamento",
  },
  {
    url: "/9.jpeg",
    alt: "Clamor das esposas que lutam no altar",
  },
]

export function ImageCarousel({ onLastImage }: { onLastImage?: (isLast: boolean) => void }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMuted, setIsMuted] = useState(false)
  const [showFinalPage, setShowFinalPage] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch(() => {
        console.log("[v0] Autoplay bloqueado pelo navegador")
      })
    }
  }, [])

  useEffect(() => {
    if (onLastImage) {
      onLastImage(currentIndex === images.length - 1)
    }
    if (currentIndex === images.length) {
      setShowFinalPage(true)
    }
  }, [currentIndex, onLastImage])

  const goToPrevious = () => {
    if (showFinalPage) {
      setShowFinalPage(false)
      setCurrentIndex(images.length - 1)
    } else {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    }
  }

  const goToNext = () => {
    if (currentIndex === images.length - 1) {
      setShowFinalPage(true)
      setCurrentIndex(images.length)
    } else {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }
  }

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  if (showFinalPage) {
    return (
      <section className="relative min-h-screen w-full overflow-hidden bg-gray-900">
        <div className="relative">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/cta-background.jpeg)" }}>
            <div className="absolute inset-0 bg-black/60" />
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center px-4 py-16 text-center md:py-24">
            <h2 className="mb-4 text-balance text-3xl font-bold leading-tight text-white md:text-5xl lg:text-6xl drop-shadow-2xl">
              Faça agora o Jejum de Ester comigo e outras milhares de mulheres
            </h2>

            <p className="mb-8 text-lg text-white/95 md:text-xl lg:text-2xl drop-shadow-lg max-w-3xl">
              Desbloqueie o aplicativo completo do passo a passo do Jejum de Ester
            </p>

            <Button
              size="lg"
              className="animate-pulse-subtle bg-gradient-to-r from-amber-500 to-amber-600 px-8 py-4 text-base font-bold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:from-amber-600 hover:to-amber-700 md:px-10 md:py-5 md:text-lg rounded-full"
            >
              Participar Agora
            </Button>

            <p className="mt-6 text-sm text-white/90 md:text-base drop-shadow-md">
              Junte-se a milhares de mulheres em transformação espiritual
            </p>
          </div>
        </div>

        <div className="relative z-10 w-full px-4 py-8 md:py-12">
          <div className="mx-auto w-full max-w-3xl">
            <div className="space-y-3 px-4">
              <Comment
                name="Juliana Santos"
                time="há 2 horas"
                text="Eu quero muito entrar nessa turma de dezembro! Preciso dessa transformação na minha vida 🙏"
              />
              <Comment
                name="Mariana Costa"
                time="há 5 horas"
                text="Participei da turma de novembro e meu casamento foi completamente restaurado! Deus é maravilhoso!"
              />
              <Comment
                name="Fernanda Oliveira"
                time="há 8 horas"
                text="Quero participar! Como faço para entrar na turma de dezembro?"
              />
              <Comment
                name="Camila Rodrigues"
                time="há 12 horas"
                text="Fiz o jejum em novembro e tive uma cura emocional profunda. Recomendo demais!"
              />
              <Comment
                name="Patricia Almeida"
                time="há 1 dia"
                text="Estou ansiosa para começar em dezembro! Tenho certeza que Deus vai fazer grandes coisas"
              />
            </div>
          </div>
        </div>

        <audio ref={audioRef} loop autoPlay className="hidden">
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mp3-do-milhao-tb8plZkabeydIVBamyrelnI99vQnr9.MP3" type="audio/mpeg" />
        </audio>

        <div className="fixed bottom-0 right-0 z-20 p-4">
          <Button
            onClick={toggleMute}
            variant="secondary"
            size="icon"
            className="rounded-full bg-white/95 hover:bg-white backdrop-blur-sm shadow-lg h-12 w-12"
          >
            {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
          </Button>
        </div>
      </section>
    )
  }

  return (
    <section className="py-8 md:py-12 px-4 md:px-6">
      <div className="max-w-2xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-[9/16]">
          <div className="relative h-full bg-black">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ${
                  index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-105"
                }`}
              >
                <img src={image.url || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          <div className="absolute bottom-0 right-0 z-10">
            <Button
              onClick={toggleMute}
              variant="secondary"
              size="icon"
              className="rounded-full bg-white/95 hover:bg-white backdrop-blur-sm shadow-lg h-12 w-12"
            >
              {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
            </Button>
          </div>

          <audio ref={audioRef} loop autoPlay className="hidden">
            <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mp3-do-milhao-tb8plZkabeydIVBamyrelnI99vQnr9.MP3" type="audio/mpeg" />
          </audio>
        </div>

        <div className="mt-6 md:mt-8 flex flex-col items-center gap-5">
          <div className="flex gap-2.5">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-10 bg-gradient-to-r from-amber-500 to-yellow-600 shadow-lg"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Ir para imagem ${index + 1}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Button
              onClick={goToPrevious}
              variant="outline"
              size="icon"
              className="rounded-full h-14 w-14 border-2 border-amber-600 hover:bg-amber-50 hover:border-amber-700 transition-all shadow-lg hover:shadow-xl hover:scale-105 bg-transparent"
            >
              <ChevronLeft className="h-6 w-6 text-amber-700" />
            </Button>

            <Button
              onClick={goToNext}
              variant="outline"
              size="icon"
              className="rounded-full h-14 w-14 border-2 border-amber-600 hover:bg-amber-50 hover:border-amber-700 transition-all shadow-lg hover:shadow-xl hover:scale-105 bg-transparent"
            >
              <ChevronRight className="h-6 w-6 text-amber-700" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

function Comment({ name, time, text }: { name: string; time: string; text: string }) {
  return (
    <div className="flex gap-3 text-left">
      <div className="flex-shrink-0">
        <div className="h-9 w-9 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white font-semibold text-xs">
          {name.charAt(0)}
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-0.5">
          <span className="font-medium text-white text-xs">@{name.toLowerCase().replace(" ", "_")}</span>
          <span className="text-xs text-white/60">{time}</span>
        </div>
        <p className="text-sm text-white/95 leading-snug">{text}</p>
      </div>
    </div>
  )
}
