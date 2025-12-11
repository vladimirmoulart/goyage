import { ActivityDetail } from "@/lib/activities"
import { Check } from "lucide-react"

interface Props {
  activity: ActivityDetail
}

export function ActivityHighlights({ activity }: Props) {
  return (
    <div className="bg-white rounded-3xl p-6 border border-pink/30 shadow-sm space-y-4">
      <h2 className="text-2xl font-semibold text-foreground">À propos</h2>
      <p className="text-foreground/70 leading-relaxed">{activity.longDescription}</p>
      <div className="grid sm:grid-cols-2 gap-4 pt-2">
        {activity.highlights.map((item) => (
          <div key={item} className="flex items-start gap-3 text-sm text-foreground/80">
            <Check className="w-4 h-4 text-green flex-shrink-0 mt-0.5" />
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
