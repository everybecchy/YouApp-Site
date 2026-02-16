"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/componentes/ui/accordion"

const faqs = [
  {
    question: "O que é o YouApp e para quem ele é indicado?",
    answer: "O YouApp é uma plataforma que permite criar aplicativos PWA completos e personalizados, sem precisar escrever uma linha de código. É ideal para empreendedores, criadores de conteúdo, infoprodutores, coaches e empresas que desejam ter seu próprio app de forma rápida e profissional."
  },
  {
    question: "Preciso saber programar para usar a plataforma?",
    answer: "Não! O YouApp foi criado para quem não tem conhecimento técnico. Todo o processo é visual e intuitivo, com arrastar e soltar. Você cria seu app do zero sem escrever código."
  },
  {
    question: "O que já vem pronto no meu app?",
    answer: "Seu app já vem com um layout completo, sistema de login e senha para seus usuários, área de membros, e toda a estrutura necessária para começar a adicionar seu conteúdo imediatamente."
  },
  {
    question: "Que tipos de conteúdo posso adicionar ao meu app?",
    answer: "Você pode adicionar produtos, módulos, sessões de treinamento, vídeos, conteúdo em HTML personalizado e documentos para download. Tudo organizado da forma que preferir."
  },
  {
    question: "Posso personalizar os módulos e o visual do app?",
    answer: "Sim! Você tem controle total sobre a organização dos módulos, sessões e conteúdos. Pode personalizar cores, textos e a estrutura do seu app para refletir sua marca."
  },
  {
    question: "Para que tipo de negócio o YouApp é indicado?",
    answer: "O YouApp é perfeito para cursos online, mentorias, programas de treinamento, comunidades exclusivas, catálogos de produtos, áreas de membros e qualquer negócio que precise entregar conteúdo de forma organizada para seus clientes."
  },
  {
    question: "O que é um app PWA?",
    answer: "PWA (Progressive Web App) é uma tecnologia moderna que permite que seu app funcione como um aplicativo nativo no celular dos seus usuários, sem precisar publicar em lojas de apps. Seus clientes podem instalar direto pelo navegador."
  }
]

export function FAQSection() {
  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Perguntas Frequentes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Tire suas dúvidas sobre o YouApp
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-border">
              <AccordionTrigger className="text-left text-foreground hover:text-foreground/80 font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
