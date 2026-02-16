"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Smartphone, Zap, Shield, Play, Pause } from "lucide-react"
import { useState, useRef } from "react"

export function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <section className="relative min-h-screen">
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/youappvsl-ogKyXwUgFKIwlEeK79OEXPhfa8zY6R.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-end pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight text-balance drop-shadow-lg">
            Crie aplicativos profissionais{" "}
            <span className="text-primary">sem código</span>,{" "}
            <span className="text-primary">sem IA</span> e sem complicação
          </h1>
          
          <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto text-pretty drop-shadow-md">
            Crie apps PWA para seu negócio em minutos. Sem arquitetura confusa, sem programação e sem depender de inteligência artificial.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 h-14 text-lg font-semibold shadow-lg shadow-primary/30" asChild>
              <a href="https://youapp.io/signup">
                Criar meu app grátis
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </div>
          
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              <span>Comece grátis</span>
            </div>
            <div className="flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-primary" />
              <span>Apps PWA</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary" />
              <span>Controle total</span>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={togglePlay}
        className="absolute bottom-8 right-8 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
        aria-label={isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
      >
        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  )
}
