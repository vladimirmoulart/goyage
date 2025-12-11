import Link from "next/link"
import { Star, Clock, Users, Heart, MapPin, ChevronDown, CalendarDays } from "lucide-react"
import { activitiesData } from "@/lib/activities"

const activities = Object.values(activitiesData)

export function ActivitiesGrid() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <p className="text-foreground/70">
            <span className="font-semibold text-foreground">{activities.length} activités</span> disponibles
          </p>
          <div className="relative w-full sm:w-auto">
            <select className="w-full appearance-none px-5 py-3 rounded-full border border-pink text-foreground text-sm bg-white outline-none focus:border-coral focus:ring-2 focus:ring-coral/20 transition-colors pr-10">
              <option>Les plus populaires</option>
              <option>Prix croissant</option>
              <option>Prix décroissant</option>
              <option>Mieux notées</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/60 w-4 h-4 pointer-events-none" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {activities.map((activity) => (
            <Link
              key={activity.id}
              href={`/activites/${activity.id}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={activity.image || "/placeholder.svg"}
                  alt={activity.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <button className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                  <Heart className="w-4 h-4 text-foreground/70 hover:text-coral transition-colors" />
                </button>
                <span className="absolute top-3 left-3 bg-green text-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  {activity.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <img
                    src={activity.hostImage || "/placeholder.svg"}
                    alt={activity.host}
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  <span className="text-sm text-foreground/70">avec {activity.host}</span>
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-coral transition-colors line-clamp-1">
                  {activity.title}
                </h3>
                <p className="text-sm text-foreground/60 mt-1 flex items-center gap-1">
                  {activity.flag && (
                    <span className="text-base" role="img" aria-label={`Drapeau ${activity.location}`}>
                      {activity.flag}
                    </span>
                  )}
                  <MapPin className="w-3 h-3" />
                  {activity.location}
                </p>
                <p className="text-sm text-foreground/60 mt-1 flex items-center gap-1">
                  <CalendarDays className="w-3 h-3" />
                  {activity.date}
                </p>

                <div className="flex items-center gap-4 mt-3 text-sm text-foreground/70">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {activity.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {activity.bookedGuests}/{activity.maxGuests} personnes
                  </span>
                </div>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-pink/30">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-coral text-coral" />
                    <span className="font-semibold text-foreground">{activity.rating}</span>
                    <span className="text-sm text-foreground/60">({activity.reviews})</span>
                  </div>
                  <div>
                    <span className="font-bold text-coral text-lg">{activity.price}€</span>
                    <span className="text-sm text-foreground/60"> / pers.</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
