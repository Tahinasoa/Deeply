"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { GraduationCap } from "lucide-react";
import { useState } from "react";

export type LabeledSelectOption = {
  value: string;
  label: string;
  disabled?: boolean;
};

type LabeledSelectProps = {
  options: LabeledSelectOption[];
  placeholder?: string;
  triggerClassName?: string;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string | null) => void;
  disabled?: boolean;
  name?: string;
  key?: string
  children?:React.ReactNode
};

// Base UI's SelectValue needs a render function to map value -> label.
// This wraps that logic so it doesn't need to be repeated everywhere.
export function LabeledSelect({
  options,
  placeholder,
  triggerClassName,
  value,
  defaultValue,
  onValueChange,
  disabled,
  name,
  children
}: LabeledSelectProps) {
  const [currentValue, setValue] = useState<string | null>(value || null);
  const labels = new Map(options.map((o) => [o.value, o.label]));

  return (
    <Select
      value={currentValue}
      defaultValue={defaultValue}
      onValueChange={(val: string | null) => { setValue(val); onValueChange?.(val) }}
      disabled={disabled}
      name={name}
    >
      <SelectTrigger className={triggerClassName}>
        <SelectValue placeholder={placeholder}>
          {(val: string) => (
            <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
              {children}
              <span className="truncate">{labels.get(val) ?? val}</span>
            </div>
          )}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {options.map((opt) => (
          <SelectItem key={opt.value} value={opt.value} disabled={opt.disabled}>
            {opt.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}