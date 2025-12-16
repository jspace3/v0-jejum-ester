"use client"

import { Crown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CtaFinal() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image with opacity */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/cta-background.jpeg)" }}>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <Crown className="mb-6 h-16 w-16 text-amber-400 md:h-20 md:w-20" />

        <h2 className="mb-4 text-balance text-3xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
          Faça agora o Jejum de Ester comigo e outras milhares de mulheres
        </h2>

        <p className="mb-8 text-lg text-white/90 md:text-xl lg:text-2xl">
          Desbloqueie o aplicativo completo do passo a passo do Jejum de Ester
        </p>

        <Button
          size="lg"
          className="group relative overflow-hidden bg-gradient-to-r from-amber-500 to-amber-600 px-12 py-8 text-xl font-bold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:from-amber-600 hover:to-amber-700 md:px-16 md:text-2xl"
        >
          <span className="relative z-10 flex items-center gap-3">
            <Crown className="h-6 w-6 md:h-7 md:w-7" />
            Participar Agora
          </span>
          <div className="absolute inset-0 -z-0 bg-gradient-to-r from-yellow-400 to-amber-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </Button>

        <p className="mt-6 text-sm text-white/80 md:text-base">
          Junte-se a milhares de mulheres em transformação espiritual
        </p>
      </div>
    </section>
  )
}
