"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isTransparent, setIsTransparent] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransparent(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  const textColorClass = isTransparent 
    ? "text-foreground/80 hover:text-foreground" 
    : "text-white/90 hover:text-white"

  return (
    <header 
      style={{
        backgroundColor: isTransparent ? 'transparent' : 'transparent',
        transition: 'all 1s ease-in-out'
      }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-28">
          <Link href="/" className="flex items-center">
            <Image 
              src={isTransparent ? "/youapp-logo-dark.png" : "/youapp-logo.png"} 
              alt="YouApp" 
              width={280} 
              height={80}
              className="h-20 w-auto transition-opacity duration-1000"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link 
              href="#como-funciona" 
              className={`text-sm font-medium transition-colors duration-1000 ${textColorClass}`}
            >
              Como funciona
            </Link>
            <Link 
              href="#funcionalidades" 
              className={`text-sm font-medium transition-colors duration-1000 ${textColorClass}`}
            >
              Funcionalidades
            </Link>
            <Link 
              href="#integracoes" 
              className={`text-sm font-medium transition-colors duration-1000 ${textColorClass}`}
            >
              Integrações
            </Link>
            <Link 
              href="#planos" 
              className={`text-sm font-medium transition-colors duration-1000 ${textColorClass}`}
            >
              Planos
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="sm" 
              className={`transition-colors duration-1000 ${isTransparent ? "text-foreground hover:text-foreground/80" : "text-white hover:text-white/80 hover:bg-white/10"}`}
              asChild
            >
              <a href="https://youapp.io/">Entrar</a>
            </Button>
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <a href="https://youapp.io/signup">Começar grátis</a>
            </Button>
          </div>

          <button
            className={`md:hidden p-2 transition-colors duration-1000 ${isTransparent ? "text-foreground" : "text-white"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 bg-background/95 backdrop-blur-sm rounded-lg mt-2">
            <nav className="flex flex-col gap-4 px-4">
              <Link href="#como-funciona" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                Como funciona
              </Link>
              <Link href="#funcionalidades" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                Funcionalidades
              </Link>
              <Link href="#integracoes" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                Integrações
              </Link>
              <Link href="#planos" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                Planos
              </Link>
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <Button variant="ghost" size="sm" className="justify-start" asChild>
                  <a href="https://youapp.io/">Entrar</a>
                </Button>
                <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                  <a href="https://youapp.io/signup">Começar grátis</a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
