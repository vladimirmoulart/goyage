"use client"

import { useState } from "react"
import { Gift, Calendar, CreditCard, Shield, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { boxesData } from "@/lib/boxes"

export function BoxBookingCard({ boxId }: { boxId: string }) {
  const [isGift, setIsGift] = useState(false)
  const [quantity, setQuantity] = useState(1)

  const box = boxesData[boxId]
  const basePrice = box?.price ?? 149
  const originalPrice = box?.originalPrice ?? 189
  const discount =
    originalPrice > basePrice ? Math.round((1 - basePrice / originalPrice) * 100) : null

  return (
    <div className="sticky top-24">
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-pink/30">
        {/* Price */}
        <div className="flex items-baseline gap-3 mb-6">
          <span className="text-3xl font-bold text-coral">{basePrice}€</span>
          {discount && (
            <>
              <span className="text-lg text-foreground/50 line-through">{originalPrice}€</span>
              <span className="bg-green/20 text-green text-sm font-semibold px-2 py-1 rounded-full">
                -{discount}%
              </span>
            </>
          )}
        </div>

        {/* Gift toggle */}
        <div className="flex items-center justify-between p-4 bg-pink/30 rounded-xl mb-6">
          <div className="flex items-center gap-3">
            <Gift className="w-5 h-5 text-coral" />
            <span className="font-medium text-foreground">C'est un cadeau ?</span>
          </div>
          <button
            onClick={() => setIsGift(!isGift)}
            className={`w-12 h-6 rounded-full transition-colors ${isGift ? "bg-coral" : "bg-foreground/20"}`}
          >
            <span
              className={`block w-5 h-5 bg-white rounded-full shadow transform transition-transform ${
                isGift ? "translate-x-6" : "translate-x-0.5"
              }`}
            />
          </button>
        </div>

        {/* Quantity */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-foreground mb-2">Quantité</label>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-10 h-10 rounded-full border border-pink flex items-center justify-center hover:bg-pink/30 transition-colors"
            >
              -
            </button>
            <span className="text-xl font-bold text-foreground w-8 text-center">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-10 h-10 rounded-full border border-pink flex items-center justify-center hover:bg-pink/30 transition-colors"
            >
              +
            </button>
          </div>
        </div>

        {/* Gift options */}
        {isGift && (
          <div className="mb-6 p-4 bg-cream rounded-xl space-y-4">
            <h4 className="font-semibold text-foreground">Options cadeau</h4>

            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="radio" name="gift" className="w-4 h-4 accent-coral" defaultChecked />
                <span className="text-sm">Coffret digital (gratuit)</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="radio" name="gift" className="w-4 h-4 accent-coral" />
                <span className="text-sm">Coffret physique (+9€)</span>
              </label>
            </div>

            <input
              type="text"
              placeholder="Nom du destinataire"
              className="w-full px-4 py-3 rounded-xl border border-pink bg-white text-foreground placeholder:text-foreground/50 outline-none focus:border-coral"
            />

            <textarea
              placeholder="Votre message personnalisé..."
              rows={3}
              className="w-full px-4 py-3 rounded-xl border border-pink bg-white text-foreground placeholder:text-foreground/50 outline-none focus:border-coral resize-none"
            />
          </div>
        )}

        {/* Total */}
        <div className="flex items-center justify-between py-4 border-t border-b border-pink/30 mb-6">
          <span className="font-semibold text-foreground">Total</span>
          <span className="text-2xl font-bold text-coral">{basePrice * quantity}€</span>
        </div>

        {/* CTA buttons */}
        <div className="space-y-3">
          <Button className="w-full bg-coral hover:bg-coral/90 text-white rounded-full py-6 text-lg">
            <CreditCard className="w-5 h-5 mr-2" />
            {isGift ? "Offrir cette Box" : "Acheter cette Box"}
          </Button>

          <Button
            variant="outline"
            className="w-full border-pink text-foreground hover:bg-pink/30 rounded-full py-6 bg-transparent"
          >
            <Heart className="w-5 h-5 mr-2" />
            Ajouter aux favoris
          </Button>
        </div>

        {/* Trust badges */}
        <div className="mt-6 pt-6 border-t border-pink/30 space-y-3">
          <div className="flex items-center gap-3 text-sm text-foreground/70">
            <Shield className="w-5 h-5 text-green" />
            <span>Paiement 100% sécurisé</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-foreground/70">
            <Calendar className="w-5 h-5 text-green" />
            <span>Validité 18 mois</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-foreground/70">
            <Gift className="w-5 h-5 text-green" />
            <span>Annulation gratuite sous 14 jours</span>
          </div>
        </div>
      </div>
    </div>
  )
}
