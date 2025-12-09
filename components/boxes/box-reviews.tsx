import { Star, ThumbsUp } from "lucide-react"

const reviews = [
  {
    id: 1,
    author: "Sophie M.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    date: "Novembre 2024",
    title: "Un cadeau inoubliable !",
    content:
      "J'ai offert cette box à mes parents pour leurs 30 ans de mariage. Ils sont revenus enchantés du Maroc avec des souvenirs plein la tête. L'atelier poterie avec Ahmed était leur moment préféré. Merci GOYAGE !",
    helpful: 24,
    experience: "Box Maroc Authentique",
  },
  {
    id: 2,
    author: "Marc D.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    date: "Octobre 2024",
    title: "Des rencontres authentiques",
    content:
      "On cherchait à sortir des sentiers battus pour notre voyage au Maroc. Cette box nous a permis de vraiment rencontrer des locaux passionnés. Le thé chez Khadija restera un de nos plus beaux souvenirs de voyage.",
    helpful: 18,
    experience: "Box Maroc Authentique",
  },
  {
    id: 3,
    author: "Émilie L.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 4,
    date: "Septembre 2024",
    title: "Très bonne expérience",
    content:
      "Excellentes activités et hôtes très accueillants. Seul petit bémol : la flexibilité des dates était un peu limitée en haute saison. Mais globalement une très belle découverte du Maroc authentique.",
    helpful: 12,
    experience: "Box Maroc Authentique",
  },
]

export function BoxReviews() {
  const averageRating = 4.9
  const totalReviews = 234

  return (
    <section>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">Avis des voyageurs</h2>
        <div className="flex items-center gap-2">
          <Star className="w-6 h-6 fill-coral text-coral" />
          <span className="text-2xl font-bold text-foreground">{averageRating}</span>
          <span className="text-foreground/60">({totalReviews} avis)</span>
        </div>
      </div>

      {/* Rating breakdown */}
      <div className="bg-white rounded-2xl p-6 mb-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[5, 4, 3, 2, 1].map((rating) => {
            const percentage = rating === 5 ? 85 : rating === 4 ? 12 : rating === 3 ? 3 : 0
            return (
              <div key={rating} className="text-center">
                <div className="flex items-center justify-center gap-1 mb-2">
                  <span className="font-semibold">{rating}</span>
                  <Star className="w-4 h-4 fill-coral text-coral" />
                </div>
                <div className="h-2 bg-pink/50 rounded-full overflow-hidden">
                  <div className="h-full bg-coral rounded-full" style={{ width: `${percentage}%` }} />
                </div>
                <p className="text-sm text-foreground/60 mt-1">{percentage}%</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Reviews list */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <img
                src={review.avatar || "/placeholder.svg"}
                alt={review.author}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-foreground">{review.author}</h4>
                    <p className="text-sm text-foreground/60">{review.date}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < review.rating ? "fill-coral text-coral" : "text-foreground/20"}`}
                      />
                    ))}
                  </div>
                </div>

                <h5 className="font-semibold text-foreground mt-3">{review.title}</h5>
                <p className="text-foreground/70 mt-2 leading-relaxed">{review.content}</p>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-pink/30">
                  <span className="text-sm text-foreground/60">{review.experience}</span>
                  <button className="flex items-center gap-2 text-sm text-foreground/60 hover:text-coral transition-colors">
                    <ThumbsUp className="w-4 h-4" />
                    Utile ({review.helpful})
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <Button className="bg-white border border-coral text-coral hover:bg-coral hover:text-white rounded-full px-8 py-3">
          Voir tous les avis
        </Button>
      </div>
    </section>
  )
}

import { Button } from "@/components/ui/button"
