import { Button } from "@/componentes/ui/button"
import { Check, Star } from "lucide-react"

export function PricingSection() {
  const plans = [
    {
      name: "Free",
      price: "0",
      description: "Para começar a explorar",
      featured: true,
      features: [
        "1 aplicativo",
        "10 novos usuários/mês",
        "Conteúdos ilimitados"
      ],
      cta: "Cadastre-se grátis",
      highlight: true
    },
    {
      name: "Basic",
      price: "97",
      description: "Para pequenos projetos",
      featured: false,
      features: [
        "2 aplicativos",
        "400 novos usuários/mês",
        "Conteúdos ilimitados",
        "Editor completo",
        "Suporte WhatsApp",
        "Recuperação de usuários",
        "R$ 0,18 por usuário extra"
      ],
      cta: "Começar agora"
    },
    {
      name: "Starter",
      price: "197",
      description: "Para negócios em crescimento",
      featured: false,
      features: [
        "3 aplicativos",
        "1000 novos usuários/mês",
        "Conteúdos ilimitados",
        "Editor completo",
        "Suporte WhatsApp",
        "Recuperação de usuários",
        "R$ 0,18 por usuário extra"
      ],
      cta: "Começar agora"
    },
    {
      name: "Professional",
      price: "397",
      description: "Para profissionais",
      featured: false,
      features: [
        "Aplicativos ilimitados",
        "3000 novos usuários/mês",
        "Conteúdos ilimitados",
        "Editor completo",
        "Suporte WhatsApp",
        "Recuperação de usuários",
        "R$ 0,18 por usuário extra"
      ],
      cta: "Começar agora"
    },
    {
      name: "Scale",
      price: "797",
      description: "Para escalar",
      featured: false,
      features: [
        "Aplicativos ilimitados",
        "8000 novos usuários/mês",
        "Conteúdos ilimitados",
        "Editor completo",
        "Suporte WhatsApp",
        "Recuperação de usuários",
        "Suporte prioritário"
      ],
      cta: "Começar agora"
    }
  ]

  return (
    <section id="planos" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Planos para todos os tamanhos
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Comece grátis e escale conforme seu negócio cresce
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative rounded-2xl p-6 ${
                plan.highlight 
                  ? "bg-foreground text-background border-2 border-foreground" 
                  : "bg-card border border-border"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    <Star className="w-3 h-3" />
                    <span>Popular</span>
                  </div>
                </div>
              )}
              
              <div className="mb-6">
                <h3 className={`text-lg font-semibold ${plan.highlight ? "text-background" : "text-foreground"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mt-1 ${plan.highlight ? "text-background/70" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <span className={`text-4xl font-bold ${plan.highlight ? "text-background" : "text-foreground"}`}>
                  R$ {plan.price}
                </span>
                <span className={`${plan.highlight ? "text-background/70" : "text-muted-foreground"}`}>/mês</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2">
                    <Check className={`w-4 h-4 mt-0.5 shrink-0 ${
                      plan.highlight ? "text-primary" : "text-primary"
                    }`} />
                    <span className={`text-sm ${
                      plan.highlight ? "text-background/90" : "text-muted-foreground"
                    }`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full ${
                  plan.highlight 
                    ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
