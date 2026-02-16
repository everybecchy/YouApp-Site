import { ArrowRight } from "lucide-react"

export function IntegrationsSection() {
  return (
    <section id="integracoes" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Integrações poderosas
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Conecte seu app com as principais plataformas de vendas e entrega de produtos digitais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-[#F04E23]/10 rounded-2xl flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-10 h-10">
                  <circle cx="50" cy="50" r="40" fill="#F04E23" />
                  <path d="M35 50 L45 60 L65 40" stroke="white" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">Hotmart</h3>
                <p className="text-muted-foreground">Plataforma de infoprodutos</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6">
              Entregue seus cursos e produtos digitais automaticamente para compradores da Hotmart.
            </p>
            <div className="flex items-center text-sm text-primary font-medium">
              <span>Saiba mais</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </div>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-[#95BF47]/10 rounded-2xl flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-10 h-10">
                  <path d="M60 20 L75 30 L75 75 L50 85 L25 75 L25 30 L40 20 L50 25 L60 20 Z" fill="#95BF47" />
                  <path d="M50 25 L50 85" stroke="#7AB55C" strokeWidth="3" />
                  <path d="M25 30 L50 40 L75 30" stroke="#7AB55C" strokeWidth="3" fill="none" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">Shopify</h3>
                <p className="text-muted-foreground">E-commerce</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6">
              Integre sua loja Shopify e ofereça uma experiência de app para seus clientes.
            </p>
            <div className="flex items-center text-sm text-primary font-medium">
              <span>Saiba mais</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            Mais integrações em breve: Kiwify, Eduzz, Monetizze e mais
          </p>
        </div>
      </div>
    </section>
  )
}
