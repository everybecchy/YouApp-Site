import { Check, Eye, Settings, Briefcase } from "lucide-react"

export function SolutionSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full text-sm text-green-600 mb-6">
              <Check className="w-4 h-4" />
              <span>A solução</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
              O YouApp é simples porque foi feito para negócios, não para desenvolvedores
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Você cria, organiza, publica e vende — tudo visualmente. Sem escrever uma linha de código, sem depender de IA para gerar estruturas complexas.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center shrink-0">
                  <Eye className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">100% Visual</h3>
                  <p className="text-muted-foreground mt-1">
                    Interface intuitiva onde você vê exatamente o que está criando.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center shrink-0">
                  <Settings className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Controle Total</h3>
                  <p className="text-muted-foreground mt-1">
                    Você entende e controla cada parte do seu aplicativo.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center shrink-0">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Pensado para Negócios</h3>
                  <p className="text-muted-foreground mt-1">
                    Ferramentas focadas em resultados, não em complexidade técnica.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-card border border-border rounded-2xl p-8 shadow-xl">
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <span className="text-primary-foreground font-bold">1</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Crie seu app</p>
                    <p className="text-sm text-muted-foreground">Em poucos cliques</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <span className="text-primary-foreground font-bold">2</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Adicione conteúdos</p>
                    <p className="text-sm text-muted-foreground">Vídeos, downloads, HTML</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <span className="text-primary-foreground font-bold">3</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Publique e venda</p>
                    <p className="text-sm text-muted-foreground">Pronto para usar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
