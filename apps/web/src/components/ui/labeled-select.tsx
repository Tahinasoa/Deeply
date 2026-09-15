"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  name?: string;
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
}: LabeledSelectProps) {
  const labels = new Map(options.map((o) => [o.value, o.label]));

  return (
    <Select
      value={value}
      defaultValue={defaultValue}
      onValueChange={(val: unknown) => onValueChange?.(val as string)}
      disabled={disabled}
      name={name}
    >
      <SelectTrigger className={triggerClassName}>
        <SelectValue placeholder={placeholder}>
          {(val: string) => labels.get(val) ?? val}
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