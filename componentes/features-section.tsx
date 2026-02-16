import { Video, Download, Code2, Users, ShoppingBag, Store, Smartphone, Zap } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Smartphone,
      title: "Apps PWA",
      description: "Crie aplicativos que funcionam como apps nativos no celular"
    },
    {
      icon: Video,
      title: "Vídeos",
      description: "Adicione vídeos do YouTube, Vimeo ou hospede seus próprios"
    },
    {
      icon: Download,
      title: "Downloads",
      description: "Ofereça arquivos e conteúdos para seus usuários baixarem"
    },
    {
      icon: Code2,
      title: "HTML Personalizado",
      description: "Incorpore qualquer conteúdo externo com código HTML"
    },
    {
      icon: Users,
      title: "Área de Membros",
      description: "Crie espaços exclusivos para seus clientes e comunidade"
    },
    {
      icon: ShoppingBag,
      title: "Produtos Digitais",
      description: "Entregue cursos, ebooks e materiais de forma automatizada"
    },
    {
      icon: Store,
      title: "Para Negócios Locais",
      description: "Cardápios, catálogos e apps para lojas e restaurantes"
    },
    {
      icon: Zap,
      title: "Recuperação de Usuários",
      description: "Ferramentas para reengajar usuários inativos"
    }
  ]

  return (
    <section id="funcionalidades" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Tudo que você precisa em um só lugar
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Funcionalidades completas para criar, gerenciar e monetizar seu aplicativo
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
