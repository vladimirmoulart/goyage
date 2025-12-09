import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sophie M.",
    location: "Paris, France",
    avatar: "/french-woman-traveler-smiling-portrait.jpg",
    text: "GOYAGE a transformé ma façon de voyager. L'expérience avec Maria à Lisbonne était incroyable - bien plus qu'un simple cours de cuisine, c'était une vraie immersion culturelle.",
    experience: "Cours de cuisine à Lisbonne",
    rating: 5,
  },
  {
    id: 2,
    name: "Thomas K.",
    location: "Berlin, Allemagne",
    avatar: "/german-man-backpacker-smiling-portrait.jpg",
    text: "En tant qu'hôte, j'adore partager ma passion pour le street art berlinois. GOYAGE me permet de rencontrer des voyageurs curieux et de leur montrer ma ville sous un angle unique.",
    experience: "Hôte - Tour street art",
    rating: 5,
  },
  {
    id: 3,
    name: "Yuki T.",
    location: "Tokyo, Japon",
    avatar: "/japanese-woman-traveler-smiling-portrait.jpg",
    text: "La plateforme est intuitive et les hôtes sont incroyables. J'ai vécu des moments magiques que je n'aurais jamais découverts seule. Merci GOYAGE !",
    experience: "Cérémonie du thé à Kyoto",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-pink/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Ce qu'ils disent de nous</h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            Des milliers de voyageurs et d'hôtes partagent leurs expériences GOYAGE.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-pink" />

              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-pink"
                />
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-foreground/60">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-coral text-coral" />
                ))}
              </div>

              <p className="text-foreground/80 leading-relaxed">"{testimonial.text}"</p>

              <p className="mt-4 text-sm font-medium text-green">{testimonial.experience}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
