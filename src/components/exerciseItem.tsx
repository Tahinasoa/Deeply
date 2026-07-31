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
import Link from "next/link"

export function ExerciseItem({ exerciseId,title, description , masterLevel}: {exerciseId:string, title: string, description: string,masterLevel:number }) {
  return (
    <Link className="flex w-full max-w-md flex-col gap-6 hover:border-primary hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
     href={`exercise/${exerciseId}`} >
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
    </Link>
  )
}
