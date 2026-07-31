import { BadgeCheckIcon, ChevronRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { MasterLevelChart } from "@/components/ui/masterLevel"

export function ExerciseItem({ title, description , masterLevel}: { title: string, description: string,masterLevel:number }) {
  return (
    <div className="flex w-full max-w-md flex-col gap-6 hover:border-primary/100 hover:shadow-sm transition-all duration-200 cursor-pointer">
      <Item variant="outline">
        <ItemContent>
          <ItemTitle>{title}</ItemTitle>
          <ItemDescription>
            {description}
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <MasterLevelChart masterLevel={masterLevel} />
        </ItemActions>
      </Item>
    </div>
  )
}
