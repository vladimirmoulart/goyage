import { MapPin, Star, Users, Clock, Heart, CalendarDays } from "lucide-react"
import { ActivityDetail } from "@/lib/activities"

interface Props {
  activity: ActivityDetail
}

export function ActivityDetailHero({ activity }: Props) {
  return (
    <section className="pt-24 md:pt-28 pb-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 lg:grid-cols-2 items-center">
        <div>
          <p className="text-sm font-semibold text-coral uppercase">{activity.category}</p>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-foreground leading-tight">{activity.title}</h1>
          <p className="mt-3 text-foreground/70 flex items-center gap-2">
            {activity.flag && (
              <span className="text-2xl leading-none" role="img" aria-label={`Drapeau ${activity.location}`}>
                {activity.flag}
              </span>
            )}
            <MapPin className="w-4 h-4 text-coral" />
            {activity.location}
          </p>
          <p className="mt-3 text-foreground/70 flex items-center gap-2">
            <CalendarDays className="w-4 h-4 text-green" />
            {activity.date}
          </p>
          <p className="mt-4 text-lg text-foreground/80">{activity.shortDescription}</p>

          <div className="mt-6 flex flex-wrap gap-4 text-sm text-foreground/70">
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-coral" />
              {activity.duration}
            </span>
            <span className="flex items-center gap-1">
              <Users className="w-4 h-4 text-green" />
              {activity.bookedGuests}/{activity.maxGuests} personnes
            </span>
            <span className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-coral text-coral" />
              {activity.rating} ({activity.reviews})
            </span>
          </div>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-md border border-pink/30">
            <Heart className="w-4 h-4 text-coral" />
            <span className="text-sm font-semibold text-foreground">Animé par {activity.host}</span>
          </div>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <img src={activity.image || "/placeholder.svg"} alt={activity.title} className="w-full h-[360px] md:h-[420px] object-cover" />
          <div className="absolute bottom-4 right-4 bg-white/90 rounded-full px-4 py-2 text-coral font-bold shadow">
            {activity.price}€ / pers.
          </div>
        </div>
      </div>
    </section>
  )
}
