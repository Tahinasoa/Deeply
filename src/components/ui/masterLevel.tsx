"use client"

import * as React from "react"
import { Label, Pie, PieChart } from "recharts"
import { ChartContainer, type ChartConfig } from "@/components/ui/chart"

const chartData = [
    { type: "Passed", value : 25, fill: "var(--chart-4)" },
    { type: "unPassed", value: 75, fill: "var(--muted)" },
]

const chartConfig = {} satisfies ChartConfig

export function MasterLevelChart({masterLevel}:{masterLevel:number}) {
const chartData = [
    { type: "Passed", value : masterLevel, fill: "var(--chart-4)" },
    { type: "unPassed", value: 100 - masterLevel, fill: "var(--muted)" },
]

    return (
        /* Visual Anchor: Strict micro dimensions */
        <div className="w-[50px] h-[50px] flex items-center justify-center ">
            <ChartContainer
                config={chartConfig}
                className="w-full h-full aspect-square"
            >
                <PieChart width={50} height={50}>
                    <Pie
                        data={chartData}
                        dataKey="value"
                        nameKey="type"
                        innerRadius={17}  
                        outerRadius={25}
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
