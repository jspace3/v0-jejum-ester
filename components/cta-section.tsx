import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"

const benefits = [
  "Guia completo de 3 dias com orientações diárias",
  "Playlist exclusiva de músicas de adoração",
  "Materiais de apoio em PDF",
  "Versículos e meditações selecionadas",
  "Acesso a grupo de apoio online",
  "Suporte espiritual durante toda a jornada",
]

export function CtaSection() {
  return (
    <section id="comprar" className="py-12 md:py-20 px-4 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-4xl mx-auto">
        <Card className="border-2 shadow-2xl">
          <CardContent className="pt-6 pb-6 md:pt-8 md:pb-8 px-4 md:px-6">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4 text-balance">Comece Sua Jornada Hoje</h2>
              <p className="text-base md:text-xl text-muted-foreground text-balance px-2">
                Experimente o poder transformador do Jejum de Ester
              </p>
            </div>

            <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-2 md:gap-3">
                  <div className="rounded-full bg-primary/10 p-1 mt-0.5 flex-shrink-0">
                    <Check className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                  </div>
                  <p className="text-sm md:text-base text-card-foreground leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>

            <div className="text-center space-y-4 md:space-y-6">
              <div>
                <p className="text-sm md:text-base text-muted-foreground mb-1 md:mb-2">Investimento único de</p>
                <p className="text-4xl md:text-5xl font-bold text-primary">R$ 47,00</p>
              </div>

              <Button size="lg" className="w-full md:w-auto md:px-12 py-5 md:py-6 text-base md:text-lg font-semibold">
                Começar Meu Jejum Agora
              </Button>

              <p className="text-xs md:text-sm text-muted-foreground px-2">
                {"🔒 Pagamento 100% seguro | ✅ Acesso imediato após o pagamento"}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
