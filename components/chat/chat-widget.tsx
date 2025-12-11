"use client"

import { useState } from "react"
import { MessageCircle, X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

type ChatMessage = {
  author: "user" | "bot"
  text: string
}

const quickQuestions = [
  "Quelles destinations sont disponibles ?",
  "Comment fonctionne une Box GOYAGE ?",
  "Puis-je offrir une activité ?",
]

const quickAnswers: Record<string, string> = {
  "quelles destinations sont disponibles ?":
    "Nous nous concentrons actuellement sur 5 destinations : Maroc, Italie, Bali, Espagne et Seychelles. Chaque page destination regroupe les expériences correspondantes.",
  "comment fonctionne une box goyage ?":
    "Chaque Box inclut plusieurs expériences vérifiées + un accès 18 mois. Choisissez la box, recevez votre coffret (digital ou physique) et réservez vos activités via votre espace GOYAGE.",
  "puis-je offrir une activité ?":
    "Oui, il suffit de sélectionner l’option cadeau lors du paiement. Vous pouvez personnaliser un message et envoyer le coffret par mail ou courrier.",
}

const DEFAULT_REPLY =
  "Notre assistant reviendra vite vers vous. En attendant, consultez la FAQ ou contactez l'équipe GOYAGE !"

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      author: "bot",
      text: "Bonjour ! Je suis l'assistant GOYAGE. Comment puis-je vous aider ?",
    },
  ])
  const [pendingMessage, setPendingMessage] = useState("")

  const handleSend = (text: string) => {
    if (!text.trim()) return
    const normalized = text.trim().toLowerCase()
    const reply = quickAnswers[normalized] ?? DEFAULT_REPLY
    setMessages((prev) => [...prev, { author: "user", text: text.trim() }, { author: "bot", text: reply }])
    setPendingMessage("")
  }

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 z-40" onClick={() => setIsOpen(false)} aria-hidden />
      )}
      <div className="fixed bottom-6 right-6 z-50">
        {isOpen && (
          <div
            className="mb-4 w-80 sm:w-96 bg-white rounded-3xl shadow-2xl border border-pink/40 overflow-hidden"
            role="dialog"
            aria-label="Assistant GOYAGE"
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-pink/30 bg-cream">
              <div>
                <p className="font-semibold text-foreground">Assistant GOYAGE</p>
                <p className="text-sm text-foreground/70">IA concierge (fiction)</p>
              </div>
              <button
                aria-label="Fermer le chat"
                className="rounded-full p-1 hover:bg-white"
                onClick={() => setIsOpen(false)}
              >
                <X className="w-5 h-5 text-foreground/70" />
              </button>
            </div>

            <div className="max-h-72 overflow-y-auto px-5 py-4 space-y-3">
              {messages.map((message, index) => (
                <div
                  key={`${message.author}-${index}-${message.text.slice(0, 10)}`}
                  className={`flex ${message.author === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`rounded-2xl px-4 py-2 text-sm ${
                      message.author === "user"
                        ? "bg-coral text-white rounded-br-none"
                        : "bg-pink/20 text-foreground rounded-bl-none"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="px-5 pb-3 space-y-2">
              <p className="text-xs font-semibold text-foreground/60 uppercase tracking-wide">Questions rapides</p>
              <div className="flex flex-wrap gap-2">
                {quickQuestions.map((question) => (
                  <button
                    key={question}
                    onClick={() => handleSend(question)}
                    className="text-xs px-3 py-1 rounded-full border border-pink/40 text-foreground/80 hover:bg-pink/30 transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>

            <form
              className="flex items-center gap-2 px-5 pb-5"
              onSubmit={(event) => {
                event.preventDefault()
                handleSend(pendingMessage)
              }}
            >
              <input
                type="text"
                value={pendingMessage}
                onChange={(event) => setPendingMessage(event.target.value)}
                placeholder="Écrivez votre question..."
                className="flex-1 rounded-full border border-pink/40 px-4 py-2 text-sm outline-none focus:border-coral"
              />
              <Button type="submit" size="icon" className="rounded-full bg-coral hover:bg-coral/90">
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        )}

        <Button
          onClick={() => setIsOpen((prev) => !prev)}
          className="rounded-full w-14 h-14 bg-coral hover:bg-coral/90 shadow-xl"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>
    </>
  )
}
