import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Алексей Морозов",
    role: "Частный инвестор",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "CryptoVault — самая удобная платформа из всех, что я пробовал. Переводы моментальные, интерфейс понятный даже новичку.",
  },
  {
    name: "Мария Светлова",
    role: "Финансовый аналитик, Digital Assets Fund",
    avatar: "/professional-woman-scientist.png",
    content:
      "Для профессиональной работы с крипторынком CryptoVault — идеальный инструмент. Аналитика и скорость на высшем уровне.",
  },
  {
    name: "Дина Кимура",
    role: "CEO, BlockTrade Solutions",
    avatar: "/asian-woman-tech-developer.jpg",
    content:
      "Мы перевели весь корпоративный портфель на CryptoVault. Безопасность и мультичейн-поддержка — именно то, что нам нужно.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Нам доверяют</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Что говорят пользователи и профессионалы рынка о нашей платформе
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
