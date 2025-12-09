"use client"

import { useEffect, useState } from "react"

export function HeroVisual() {
  const [showMockup, setShowMockup] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => setShowMockup((prev) => !prev), 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-[520px] flex items-center justify-center">
      <div
        className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
          showMockup ? "opacity-0 pointer-events-none" : "opacity-100"
        } hidden lg:block`}
      >
        <div className="relative rounded-3xl overflow-hidden shadow-2xl h-full">
          <img
            src="/happy-travelers-sharing-meal-with-local-host-famil.jpg"
            alt="Voyageurs partageant un repas avec une famille locale"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
            <div className="flex items-center gap-3">
              <img src="/friendly-woman-portrait-smiling.jpg" alt="Maria" className="w-12 h-12 rounded-full object-cover" />
              <div className="flex-1">
                <p className="font-semibold text-foreground">Cours de cuisine avec Maria</p>
                <p className="text-sm text-foreground/70">Lisbonne, Portugal</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-coral">45€</p>
                <p className="text-xs text-foreground/70">par personne</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -top-4 -right-4 bg-green text-foreground px-4 py-2 rounded-full font-semibold shadow-lg">
          Vérifié GOYAGE
        </div>
      </div>

      <div
        className={`transition-opacity duration-[1200ms] ease-in-out ${
          showMockup ? "opacity-100" : "opacity-0 pointer-events-none"
        } hidden lg:block`}
      >
        <img src="/mockup-iphone.png" alt="Mockup iPhone" className="max-h-[560px] md:max-h-[600px] w-auto object-contain" />
      </div>
    </div>
  )
}
