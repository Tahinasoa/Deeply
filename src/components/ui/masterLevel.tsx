"use client"

import * as React from "react"
import { Label, Pie, PieChart } from "recharts"
import { ChartContainer, type ChartConfig } from "@/components/ui/chart"

const chartData = [
    { type: "Passed", value : 25, fill: "var(--chart-4)" },
    { type: "unPassed", value: 75, fill: "var(--muted)" },
]

const chartConfig = {} satisfies ChartConfig

export function MasterLevelChart({masterLevel, innerRadius, outerRadius}:{masterLevel:number, innerRadius: number, outerRadius: number}) {
const chartData = [
    { type: "Passed", value : masterLevel, fill: "var(--chart-4)" },
    { type: "unPassed", value: 100 - masterLevel, fill: "var(--muted)" },
]

    return (
        /* Visual Anchor: Strict micro dimensions */
        <div className="flex items-center justify-center " style={{ width: `${2 * outerRadius}px`, height: `${2 * outerRadius}px` }}>
            <ChartContainer
                config={chartConfig}
                className="w-full h-full aspect-square"
            >
                <PieChart width={2 * outerRadius} height={2 * outerRadius}>
                    <Pie
                        data={chartData}
                        dataKey="value"
                        nameKey="type"
                        innerRadius={innerRadius}  
                        outerRadius={outerRadius}
                        strokeWidth={0}
                        startAngle={90}
                        endAngle={-270}
                    >
                        <Label
                            content={({ viewBox }) => {
                                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                    return (
                                        <text
                                            x={viewBox.cx}
                                            y={viewBox.cy}
                                            textAnchor="middle"
                                            dominantBaseline="central" // Centers text perfectly on the Y-axis
                                        >
                                            <tspan
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                className="fill-foreground text-[10px] font-bold tracking-tighter"
                                            >
                                                {masterLevel}%
                                            </tspan>
                                        </text>
                                    )
                                }
                            }}
                        />
                    </Pie>
                </PieChart>
            </ChartContainer>
        </div>
    )
}
