import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Política de Privacidade - YouApp",
  description: "Política de Privacidade da plataforma YouApp",
}

export default function PoliticaDePrivacidade() {
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
          Política de Privacidade
        </h1>

        <div className="prose prose-neutral max-w-none">
          <p className="text-muted-foreground mb-6">
            Última atualização: Janeiro de 2026
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">1. Introdução</h2>
            <p className="text-muted-foreground mb-4">
              A YouApp está comprometida em proteger sua privacidade. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações quando você usa nossa plataforma.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">2. Informações que Coletamos</h2>
            <p className="text-muted-foreground mb-4">
              Coletamos informações que você nos fornece diretamente, incluindo:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li>Nome e endereço de e-mail ao criar uma conta</li>
              <li>Informações de perfil e preferências</li>
              <li>Conteúdo que você cria e carrega na plataforma</li>
              <li>Comunicações conosco</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">3. Como Usamos Suas Informações</h2>
            <p className="text-muted-foreground mb-4">
              Utilizamos as informações coletadas para:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li>Fornecer, manter e melhorar nossos serviços</li>
              <li>Processar transações e enviar notificações relacionadas</li>
              <li>Responder a seus comentários, perguntas e solicitações</li>
              <li>Enviar comunicações técnicas, atualizações e mensagens de suporte</li>
              <li>Monitorar e analisar tendências, uso e atividades</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">4. Compartilhamento de Informações</h2>
            <p className="text-muted-foreground mb-4">
              Não vendemos suas informações pessoais. Podemos compartilhar informações apenas nas seguintes situações:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li>Com seu consentimento ou sob sua direção</li>
              <li>Com prestadores de serviços que trabalham em nosso nome</li>
              <li>Para cumprir obrigações legais</li>
              <li>Para proteger direitos, privacidade, segurança ou propriedade</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">5. Segurança dos Dados</h2>
            <p className="text-muted-foreground mb-4">
              Implementamos medidas de segurança técnicas e organizacionais apropriadas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">6. Seus Direitos</h2>
            <p className="text-muted-foreground mb-4">
              Você tem direito a:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li>Acessar e receber uma cópia de seus dados pessoais</li>
              <li>Retificar dados incorretos ou incompletos</li>
              <li>Solicitar a exclusão de seus dados pessoais</li>
              <li>Retirar seu consentimento a qualquer momento</li>
              <li>Apresentar reclamação a uma autoridade de proteção de dados</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">7. Cookies</h2>
            <p className="text-muted-foreground mb-4">
              Utilizamos cookies e tecnologias similares para coletar informações sobre sua navegação e melhorar sua experiência. Você pode configurar seu navegador para recusar cookies, embora isso possa afetar algumas funcionalidades.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">8. Alterações nesta Política</h2>
            <p className="text-muted-foreground mb-4">
              Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre alterações significativas publicando a nova política nesta página e atualizando a data de "última atualização".
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">9. Contato</h2>
            <p className="text-muted-foreground mb-4">
              Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco através do e-mail: privacidade@youapp.io
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
