import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-foreground">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-background text-balance">
          Pronto para criar seu aplicativo sem código e sem IA?
        </h2>
        <p className="mt-6 text-lg text-background/70">
          Comece grátis agora mesmo. Sem cartão de crédito, sem compromisso.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 h-12">
            Criar meu app grátis
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button variant="outline" size="lg" className="text-base px-8 h-12 border-background/20 text-background hover:bg-background/10 bg-transparent">
            Falar com especialista
          </Button>
        </div>
      </div>
    </section>
  )
}
