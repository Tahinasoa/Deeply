'use client'

import { LabeledSelect, LabeledSelectOption } from "@/components/ui/labeled-select"
import { useQueryParams } from "../hooks/query-params"
import { Globe, Globe2, GlobeLock, GraduationCap } from "lucide-react";


export const EducationalSystemSelect = ({ options, value }: { options: LabeledSelectOption[], value: string }) => {
    const setParams = useQueryParams();
    return <LabeledSelect options={options} value={value} onValueChange={(val) => { setParams({ system: val || undefined }) }} >
        <Globe className="h-4 w-4 text-blue-500 shrink-0" />
    </LabeledSelect>
}

export const GradeLevelSelect = ({ options, value }: { options: LabeledSelectOption[], value: string }) => {
    const setParams = useQueryParams();
    return <LabeledSelect options={options} value={value} onValueChange={(val) => { setParams({ grade: val || undefined }) }} >
        <GraduationCap className="h-4 w-4 text-blue-500 shrink-0" />
        </LabeledSelect>
}