import { BadgeCheckIcon, ChevronRightIcon } from "lucide-react"

import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { MasteryLevelChart } from "@/components/ui/masteryLevel"
import Link from "next/link"

export function LearningSessionItem({ exerciseId,title, description , masteryLevel}: {exerciseId:string, title: string, description: string,masteryLevel:number }) {
  return (
    <Link className="flex w-full max-w-md flex-col gap-6 hover:border-primary hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
     href={`activity/${exerciseId}`} >
      <Item variant="outline">
        <ItemContent>
          <ItemTitle>{title}</ItemTitle>
          <ItemDescription>
            {description}
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <MasteryLevelChart masteryLevel={masteryLevel} innerRadius={17} outerRadius={25} />
        </ItemActions>
      </Item>
    </Link>
  )
}
