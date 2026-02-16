import { Smartphone, Layers, FileText, Rocket } from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    {
      icon: Smartphone,
      step: "01",
      title: "Crie seu aplicativo",
      description: "Comece do zero ou escolha um template. Configure nome, ícone e aparência em minutos."
    },
    {
      icon: Layers,
      step: "02",
      title: "Organize em sessões",
      description: "Crie módulos e sessões personalizadas para organizar seu conteúdo de forma intuitiva."
    },
    {
      icon: FileText,
      step: "03",
      title: "Adicione conteúdos",
      description: "Vídeos, arquivos para download, HTML personalizado — tudo sem complicação."
    },
    {
      icon: Rocket,
      step: "04",
      title: "Publique e compartilhe",
      description: "Seu app PWA está pronto. Compartilhe o link e seus usuários podem instalar no celular."
    }
  ]

  return (
    <section id="como-funciona" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Como funciona
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Quatro passos simples para ter seu aplicativo profissional funcionando
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-card rounded-2xl p-8 border border-border h-full">
                <span className="text-5xl font-bold text-primary/20">{step.step}</span>
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mt-4 mb-6">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
