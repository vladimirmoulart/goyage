import { ActivityDetail } from "@/lib/activities"
import { Clock } from "lucide-react"

interface Props {
  activity: ActivityDetail
}

export function ActivitySchedule({ activity }: Props) {
  return (
    <div className="bg-white rounded-3xl p-6 border border-pink/30 shadow-sm">
      <h2 className="text-2xl font-semibold text-foreground mb-4">Itinéraire</h2>
      <div className="space-y-4">
        {activity.itinerary.map((step, index) => (
          <div key={step} className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-coral/10 text-coral font-semibold flex items-center justify-center">{index + 1}</div>
            <p className="text-foreground/80">{step}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 flex items-center gap-3 text-sm text-foreground/60">
        <Clock className="w-4 h-4 text-coral" />
        Point de rendez-vous : {activity.meetingPoint}
      </div>
    </div>
  )
}
