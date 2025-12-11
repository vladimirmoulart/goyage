import { ActivityDetail } from "@/lib/activities"
import { CalendarCheck } from "lucide-react"

interface Props {
  activity: ActivityDetail
}

export function ActivityHostCard({ activity }: Props) {
  return (
    <div className="bg-white rounded-3xl p-6 border border-pink/30 shadow-xl">
      <div className="flex flex-col items-center text-center gap-3">
        <img src={activity.hostImage || "/placeholder-user.jpg"} alt={activity.host} className="w-20 h-20 rounded-full object-cover" />
        <div>
          <p className="text-sm text-foreground/60">Animé par</p>
          <p className="text-lg font-semibold text-foreground">{activity.host}</p>
        </div>
        <p className="text-sm text-foreground/60">{activity.language}</p>
        <p className="text-sm text-foreground/70">Niveau conseillé : {activity.level}</p>
        <button className="mt-4 w-full rounded-full border border-coral text-coral px-4 py-3 font-semibold hover:bg-coral hover:text-white transition-colors flex items-center justify-center gap-2">
          <CalendarCheck className="w-4 h-4" />
          Réserver cette expérience
        </button>
      </div>
    </div>
  )
}
