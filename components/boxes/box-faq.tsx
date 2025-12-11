"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const faqs = [
  {
    question: "Quelle est la durée de validité de la box ?",
    answer:
      "Votre Box GOYAGE est valable 18 mois à partir de la date d'achat. Vous pouvez réserver vos expériences à tout moment pendant cette période, selon les disponibilités des hôtes.",
  },
  {
    question: "Puis-je offrir la box à quelqu'un d'autre ?",
    answer:
      "Absolument ! C'est même l'un des usages les plus populaires. Lors de l'achat, sélectionnez l'option cadeau et vous pourrez personnaliser votre message. Le destinataire recevra un coffret digital ou physique avec toutes les instructions.",
  },
  {
    question: "Comment réserver les expériences incluses ?",
    answer:
      "Une fois votre box activée, vous accédez à votre espace personnel où vous pouvez voir toutes les expériences incluses et leurs disponibilités. Réservez en quelques clics selon votre planning et recevez une confirmation instantanée.",
  },
  {
    question: "Que se passe-t-il si je ne peux pas effectuer une expérience ?",
    answer:
      "Vous pouvez annuler gratuitement jusqu'à 48h avant chaque expérience. En cas d'imprévu, contactez notre service client et nous trouverons une solution (report, échange, etc.).",
  },
  {
    question: "Les expériences sont-elles disponibles toute l'année ?",
    answer:
      "La plupart des expériences sont disponibles toute l'année, mais certaines peuvent avoir des saisonnalités. Les disponibilités exactes sont affichées lors de la réservation. Nous vous recommandons de réserver à l'avance en haute saison.",
  },
]

export function BoxFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">Questions fréquentes</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button asChild className="bg-white text-coral hover:bg-white/90 rounded-full px-6 py-3">
            <a href="#box-faq-questions">
              Explorer les questions
            </a>
          </Button>
          <Button asChild variant="outline" className="border-white/50 text-white hover:bg-white/10 rounded-full px-6 py-3">
            <a href="mailto:hello@goyage.com">
              Contacter l&apos;équipe
            </a>
          </Button>
        </div>
      </div>

      <div id="box-faq-questions" className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-2xl overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-6 text-left"
            >
              <span className="font-semibold text-foreground pr-4">{faq.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-coral transition-transform flex-shrink-0 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {openIndex === index && (
              <div className="px-6 pb-6">
                <p className="text-foreground/70 leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
