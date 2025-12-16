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

const profileImages = [
  "/images/unnamed-20-287-29.jpg",
  "/images/channels4-profile-20-284-29.jpg",
  "/images/channels4-profile-20-282-29.jpg",
  "/images/unnamed-20-283-29.jpg",
  "/images/channels4-profile-20-283-29.jpg",
  "/images/unnamed-20-284-29.jpg",
  "/images/unnamed-20-288-29.jpg",
  "/images/channels4-profile-20-285-29.jpg",
  "/images/unnamed-20-285-29.jpg",
  "/images/unnamed-20-286-29.jpg",
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
      window.scrollTo({ top: 0, behavior: "smooth" })
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
      <section className="relative w-full bg-gray-900">
        <div className="relative flex-shrink-0">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/cta-background.jpeg)" }}>
            <div className="absolute inset-0 bg-black/70" />
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center px-4 py-12 md:py-16 text-center">
            <h2 className="mb-3 text-balance text-2xl font-bold leading-tight text-white md:text-5xl lg:text-6xl drop-shadow-2xl md:mb-4">
              Faça agora o Jejum de Ester comigo e outras milhares de mulheres
            </h2>

            <p className="mb-6 text-base text-white/95 md:text-xl lg:text-2xl drop-shadow-lg max-w-3xl md:mb-8">
              Desbloqueie o aplicativo completo do passo a passo do Jejum de Ester
            </p>

            <a
              href="https://pay.cakto.com.br/5cqa6mn_649244"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button
                size="lg"
                className="animate-pulse-strong bg-gradient-to-r from-amber-500 to-amber-600 px-12 py-6 text-lg font-bold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:from-amber-600 hover:to-amber-700 md:px-16 md:py-8 md:text-2xl rounded-full"
              >
                Participar Agora
              </Button>
            </a>

            <p className="mt-4 text-xs text-white/90 md:text-base drop-shadow-md md:mt-6">
              Junte-se a milhares de mulheres em transformação espiritual
            </p>
          </div>
        </div>

        <div className="relative z-10 w-full px-4 py-8 md:py-12">
          <div className="mx-auto w-full max-w-3xl">
            <div className="space-y-3 px-4 pb-8">
              <Comment
                name="Juliana Santos"
                time="há 2 horas"
                text="Eu quero muito entrar nessa turma de dezembro! Preciso dessa transformação na minha vida 🙏"
                avatar={profileImages[0]}
              />
              <Comment
                name="Mariana Costa"
                time="há 5 horas"
                text="Participei da turma de novembro e meu casamento foi completamente restaurado! Deus é maravilhoso!"
                avatar={profileImages[1]}
              />
              <Comment
                name="Fernanda Oliveira"
                time="há 8 horas"
                text="Quero participar! Como faço para entrar na turma de dezembro?"
                avatar={profileImages[2]}
              />
              <Comment
                name="Camila Rodrigues"
                time="há 12 horas"
                text="Fiz o jejum em novembro e tive uma cura emocional profunda. Recomendo demais!"
                avatar={profileImages[3]}
              />
              <Comment
                name="Patricia Almeida"
                time="há 1 dia"
                text="Estou ansiosa para começar em dezembro! Tenho certeza que Deus vai fazer grandes coisas"
                avatar={profileImages[4]}
              />
              <Comment
                name="Roberta Lima"
                time="há 1 dia"
                text="Em novembro experimentei a presença de Deus de uma forma que nunca tinha vivido antes! 💫"
                avatar={profileImages[5]}
              />
              <Comment
                name="Andreia Silva"
                time="há 2 dias"
                text="Me inscrevi! Mal posso esperar para começar essa jornada espiritual"
                avatar={profileImages[6]}
              />
              <Comment
                name="Beatriz Souza"
                time="há 2 dias"
                text="Fiz na turma passada e foi libertador! Minha família toda viu a diferença em mim"
                avatar={profileImages[7]}
              />
              <Comment
                name="Luciana Martins"
                time="há 3 dias"
                text="Participei em novembro e recebi a resposta que estava esperando há anos! Glória a Deus! 🙌"
                avatar={profileImages[8]}
              />
              <Comment
                name="Daniela Ferreira"
                time="há 3 dias"
                text="Quero muito fazer parte! Sinto que esse é o meu momento de buscar a Deus intensamente"
                avatar={profileImages[9]}
              />
              <Comment
                name="Renata Carvalho"
                time="há 4 dias"
                text="Já estou na minha segunda vez! A transformação que tive em novembro foi tão profunda que quero continuar"
                avatar={profileImages[0]}
              />
              <Comment
                name="Vanessa Pereira"
                time="há 4 dias"
                text="Como funciona? Posso começar mesmo sendo iniciante no jejum?"
                avatar={profileImages[1]}
              />
              <Comment
                name="Simone Ribeiro"
                time="há 5 dias"
                text="Fiz em novembro e meu relacionamento com Deus nunca mais foi o mesmo! Indico de olhos fechados ❤️"
                avatar={profileImages[2]}
              />
              <Comment
                name="Cristina Araújo"
                time="há 5 dias"
                text="Esse jejum mudou minha vida! Vou fazer novamente em dezembro com minhas amigas"
                avatar={profileImages[3]}
              />
              <Comment
                name="Amanda Nunes"
                time="há 6 dias"
                text="Acabei de me inscrever! Estou muito animada para começar essa jornada"
                avatar={profileImages[4]}
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
    <section className="flex-1 flex items-center justify-center bg-gray-50 px-4 py-4">
      <div className="max-w-md w-full flex flex-col h-full max-h-[calc(100vh-140px)] justify-center">
        <div className="relative overflow-hidden rounded-2xl shadow-2xl w-full" style={{ aspectRatio: "9/16" }}>
          <div className="relative h-full bg-black">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ${
                  index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-105"
                }`}
              >
                <img
                  src={image.url || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-contain bg-black"
                />
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

        <div className="mt-4 flex flex-col items-center gap-3">
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
              className="rounded-full h-12 w-12 border-2 border-amber-600 hover:bg-amber-50 hover:border-amber-700 transition-all shadow-lg hover:shadow-xl hover:scale-105 bg-transparent"
            >
              <ChevronLeft className="h-5 w-5 text-amber-700" />
            </Button>

            <Button
              onClick={goToNext}
              variant="outline"
              size="icon"
              className="rounded-full h-12 w-12 border-2 border-amber-600 hover:bg-amber-50 hover:border-amber-700 transition-all shadow-lg hover:shadow-xl hover:scale-105 bg-transparent"
            >
              <ChevronRight className="h-5 w-5 text-amber-700" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

function Comment({ name, time, text, avatar }: { name: string; time: string; text: string; avatar: string }) {
  return (
    <div className="flex gap-3 text-left">
      <div className="flex-shrink-0">
        <img src={avatar || "/placeholder.svg"} alt={name} className="h-9 w-9 rounded-full object-cover" />
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
