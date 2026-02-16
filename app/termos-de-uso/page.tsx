import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Termos de Uso - YouApp",
  description: "Termos de Uso da plataforma YouApp",
}

export default function TermosDeUso() {
  return (
    <main className="min-h-screen bg-background py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para o início
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
          Termos de Uso
        </h1>

        <div className="prose prose-neutral max-w-none">
          <p className="text-muted-foreground mb-6">
            Última atualização: Janeiro de 2026
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">1. Aceitação dos Termos</h2>
            <p className="text-muted-foreground mb-4">
              Ao acessar e usar a plataforma YouApp, você concorda em cumprir e estar vinculado a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não poderá acessar o serviço.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">2. Descrição do Serviço</h2>
            <p className="text-muted-foreground mb-4">
              O YouApp é uma plataforma de criação de aplicativos PWA que permite aos usuários criar, personalizar e gerenciar seus próprios aplicativos sem necessidade de conhecimento em programação.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">3. Conta do Usuário</h2>
            <p className="text-muted-foreground mb-4">
              Para utilizar nossos serviços, você deve criar uma conta fornecendo informações precisas e completas. Você é responsável por manter a confidencialidade de sua conta e senha, e por todas as atividades que ocorram em sua conta.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">4. Uso Aceitável</h2>
            <p className="text-muted-foreground mb-4">
              Você concorda em não usar a plataforma para:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li>Violar qualquer lei ou regulamento aplicável</li>
              <li>Infringir direitos de propriedade intelectual de terceiros</li>
              <li>Distribuir conteúdo ilegal, ofensivo ou prejudicial</li>
              <li>Tentar acessar sistemas ou dados não autorizados</li>
              <li>Interferir no funcionamento adequado da plataforma</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">5. Propriedade Intelectual</h2>
            <p className="text-muted-foreground mb-4">
              O conteúdo que você cria usando o YouApp permanece de sua propriedade. No entanto, a plataforma, incluindo seu design, código e funcionalidades, é propriedade exclusiva do YouApp.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">6. Limitação de Responsabilidade</h2>
            <p className="text-muted-foreground mb-4">
              O YouApp é fornecido "como está" e "conforme disponível". Não garantimos que o serviço será ininterrupto, seguro ou livre de erros. Em nenhuma circunstância seremos responsáveis por danos indiretos, incidentais ou consequenciais.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">7. Modificações dos Termos</h2>
            <p className="text-muted-foreground mb-4">
              Reservamo-nos o direito de modificar estes termos a qualquer momento. Alterações significativas serão comunicadas por e-mail ou através da plataforma. O uso continuado após as alterações constitui aceitação dos novos termos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">8. Contato</h2>
            <p className="text-muted-foreground mb-4">
              Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco através do e-mail: contato@youapp.io
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
