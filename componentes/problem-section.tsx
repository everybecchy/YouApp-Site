import { AlertTriangle, Code, Brain, Puzzle } from "lucide-react"

export function ProblemSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 rounded-full text-sm text-red-600 mb-6">
            <AlertTriangle className="w-4 h-4" />
            <span>O problema</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            A inteligência artificial promete facilitar, mas acaba complicando
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Plataformas com IA geram códigos, estruturas e arquiteturas que você não entende — e que você não controla.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card rounded-2xl p-8 border border-border">
            <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6">
              <Code className="w-6 h-6 text-red-500" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Código confuso</h3>
            <p className="text-muted-foreground">
              IA gera código que você não consegue ler, entender ou modificar depois.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border">
            <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6">
              <Brain className="w-6 h-6 text-red-500" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Arquitetura complexa</h3>
            <p className="text-muted-foreground">
              Estruturas técnicas que exigem conhecimento de programação para manter.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border">
            <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6">
              <Puzzle className="w-6 h-6 text-red-500" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Difícil de escalar</h3>
            <p className="text-muted-foreground">
              Projetos gerados por IA são difíceis de manter, atualizar e expandir.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
