"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

type ParamUpdates = Record<string, string | undefined>;

/**
 * Updates multiple search params at once while keeping the rest of the
 * current URL untouched. Passing `undefined` for a key removes it.
 */
export function useQueryParams() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const setParams = useCallback(
    (updates: ParamUpdates, options?: { scroll?: boolean }) => {
      const params = new URLSearchParams(searchParams.toString());

      for (const [key, value] of Object.entries(updates)) {
        if (value === undefined) {
          params.delete(key);
        } else {
          params.set(key, value);
        }
      }

      router.push(`${pathname}?${params.toString()}`, {
        scroll: options?.scroll ?? false,
      });
    },
    [pathname, router, searchParams]
  );

  return setParams;
}