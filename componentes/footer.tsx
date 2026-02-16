import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <Link href="/">
            <Image 
              src="/youapp-logo-dark.png" 
              alt="YouApp" 
              width={140} 
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <Link href="#funcionalidades" className="hover:text-foreground transition-colors">
              Funcionalidades
            </Link>
            <Link href="#planos" className="hover:text-foreground transition-colors">
              Planos
            </Link>
            <Link href="#faq" className="hover:text-foreground transition-colors">
              FAQ
            </Link>
            <Link href="/termos-de-uso" className="hover:text-foreground transition-colors">
              Termos de Uso
            </Link>
            <Link href="/politica-de-privacidade" className="hover:text-foreground transition-colors">
              Privacidade
            </Link>
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 YouApp. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
