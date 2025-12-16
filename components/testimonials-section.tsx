import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Maria Silva",
    location: "São Paulo, SP",
    text: "O Jejum de Ester mudou completamente minha vida espiritual. Senti a presença de Deus de uma forma que nunca havia experimentado antes. Foi uma jornada transformadora!",
    rating: 5,
  },
  {
    name: "João Santos",
    location: "Rio de Janeiro, RJ",
    text: "Através deste jejum, recebi respostas claras para minhas orações. A estrutura e o acompanhamento diário me ajudaram a manter o foco e a disciplina.",
    rating: 5,
  },
  {
    name: "Ana Costa",
    location: "Belo Horizonte, MG",
    text: "Participei com minha família e foi uma experiência incrível. Nos aproximamos mais de Deus e uns dos outros. Recomendo de coração!",
    rating: 5,
  },
  {
    name: "Pedro Oliveira",
    location: "Curitiba, PR",
    text: "A profundidade espiritual deste jejum superou todas as minhas expectativas. Sinto que minha vida foi renovada e meu relacionamento com Deus fortalecido.",
    rating: 5,
  },
  {
    name: "Carla Mendes",
    location: "Porto Alegre, RS",
    text: "Fiz o Jejum de Ester em um momento difícil da minha vida. Deus me deu paz, direção e um milagre que eu tanto esperava. Glória a Deus!",
    rating: 5,
  },
  {
    name: "Lucas Ferreira",
    location: "Brasília, DF",
    text: "Experiência transformadora! Os materiais de apoio são excelentes e a música que acompanha o jejum cria uma atmosfera de adoração perfeita.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-12 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4 text-balance">Testemunhos de Transformação</h2>
          <p className="text-base md:text-xl text-muted-foreground text-balance px-2">
            Veja o que outras pessoas experimentaram através do Jejum de Ester
          </p>
        </div>

        <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="pt-5 md:pt-6 px-4 md:px-6 pb-5 md:pb-6">
                <div className="flex gap-1 mb-3 md:mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 md:h-5 md:w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm md:text-base text-card-foreground leading-relaxed mb-3 md:mb-4">{`"${testimonial.text}"`}</p>
                <div className="border-t pt-3 md:pt-4">
                  <p className="font-semibold text-sm md:text-base text-card-foreground">{testimonial.name}</p>
                  <p className="text-xs md:text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
