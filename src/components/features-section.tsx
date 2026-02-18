import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Мгновенные транзакции",
    description: "Переводы криптовалют за секунды с минимальными комиссиями благодаря интеграции с ведущими блокчейнами.",
    icon: "zap",
    badge: "Быстро",
  },
  {
    title: "Надёжная защита",
    description: "Многоуровневое шифрование, холодное хранение активов и двухфакторная аутентификация для максимальной безопасности.",
    icon: "lock",
    badge: "Безопасность",
  },
  {
    title: "Мультичейн поддержка",
    description: "Работайте с Bitcoin, Ethereum, Solana, TON и десятками других сетей в одном интерфейсе.",
    icon: "globe",
    badge: "Сети",
  },
  {
    title: "Аналитика в реальном времени",
    description: "Отслеживайте курсы, объёмы торгов и рыночные тренды с помощью продвинутых графиков и индикаторов.",
    icon: "chart",
    badge: "Данные",
  },
  {
    title: "DeFi-интеграция",
    description: "Прямой доступ к стейкингу, фармингу и ликвидным пулам из единой платформы.",
    icon: "link",
    badge: "DeFi",
  },
  {
    title: "API для разработчиков",
    description: "Открытый API для интеграции с вашими приложениями, ботами и торговыми стратегиями.",
    icon: "target",
    badge: "Dev",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Возможности платформы</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Всё, что нужно для работы с криптовалютами — в одном месте
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "zap" && "⚡"}
                    {feature.icon === "lock" && "🔐"}
                    {feature.icon === "globe" && "🌐"}
                    {feature.icon === "chart" && "📊"}
                    {feature.icon === "link" && "🔗"}
                    {feature.icon === "target" && "⚙️"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
