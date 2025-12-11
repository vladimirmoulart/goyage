import { ActivityDetail } from "@/lib/activities"
import { Check } from "lucide-react"

interface Props {
  activity: ActivityDetail
}

export function ActivityIncludes({ activity }: Props) {
  return (
    <div className="bg-white rounded-3xl p-6 border border-pink/30 shadow-sm">
      <h2 className="text-2xl font-semibold text-foreground mb-4">Ce qui est inclus</h2>
      <div className="flex flex-wrap gap-3">
        {activity.includes.map((item) => (
          <span key={item} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green/15 text-sm text-foreground/80">
            <Check className="w-4 h-4 text-green" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
