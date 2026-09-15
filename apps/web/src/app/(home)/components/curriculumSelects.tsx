'use client'

import { LabeledSelect, LabeledSelectOption } from "@/components/ui/labeled-select"
import { useQueryParams } from "../hooks/query-params"


export const EducationalSystemSelect = ({ options, value }: { options: LabeledSelectOption[], value: string }) => {
    const setParams = useQueryParams();
    return <LabeledSelect options={options} value={value} onValueChange={(val) => { setParams({ system: val||undefined }) }} />
}

export const GradeLevelSelect = ({ options, value }: { options: LabeledSelectOption[], value: string }) => {
    const setParams = useQueryParams();
    return <LabeledSelect options={options} value={value} onValueChange={(val) => { setParams({ grade: val||undefined }) }} />
}